const express = require("express");
const http = require("http");
const path = require("path");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

const rooms = {};

io.on("connection", (socket) => {
  console.log(`Player connected: ${socket.id}`);

  socket.on("joinRoom", ({ roomId, player }) => {
    if (!rooms[roomId]) {
      rooms[roomId] = { players: [] };
    }

    if (rooms[roomId].players.length < 2) {
      rooms[roomId].players.push({
        id: socket.id,
        name: player,
        element: null,
        score: 0,
      });
      socket.join(roomId);

      io.to(roomId).emit("roomState", rooms[roomId]);

      if (rooms[roomId].players.length === 2) {
        io.to(roomId).emit("startGame");
      }
    } else {
      socket.emit("roomFull");
    }
  });

  socket.on("play", ({ roomId, element }) => {
    const room = rooms[roomId];
    if (!room) return;

    const playerData = room.players.find((p) => p.id === socket.id);
    if (playerData) {
      playerData.element = element;
    }

    io.to(roomId).emit("roomState", room);

    if (room.players.every((p) => p.element !== null)) {
      const [player1, player2] = room.players;
      let result = "Draw!";

      if (
        (player1.element === "rock" && player2.element === "scizor") ||
        (player1.element === "scizor" && player2.element === "paper") ||
        (player1.element === "paper" && player2.element === "rock")
      ) {
        result = `${player1.name} win!`;
      }

      if (
        (player2.element === "rock" && player1.element === "scizor") ||
        (player2.element === "scizor" && player1.element === "paper") ||
        (player2.element === "paper" && player1.element === "rock")
      ) {
        result = `${player2.name} win!`;
      }

      io.to(roomId).emit("gameOver", { result, elements: room.players });
      room.players.forEach((p) => (p.element = null));
    }
  });

  socket.on("resetGame", ({ roomId }) => {
    const room = rooms[roomId];
    if (!room) return;
    room.players.forEach((p) => (p.element = null));
    io.to(roomId).emit("roomState", room);
  });

  socket.on("disconnect", () => {
    console.log(`Player disconnected: ${socket.id}`);
    for (const roomId in rooms) {
      rooms[roomId].players = rooms[roomId].players.filter(
        (p) => p.id !== socket.id
      );
      io.to(roomId).emit("roomState", rooms[roomId]);
    }
  });
});

app.use(express.static(path.join(__dirname, "build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

const PORT = 3001;
server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
