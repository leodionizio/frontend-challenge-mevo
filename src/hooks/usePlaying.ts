import { LoadingContext } from "contexts/loadingContext";
import { PlayContext } from "contexts/playContext";
import { useCallback, useContext, useEffect, useState } from "react";
import { Elements } from "types/elements";
import { io } from "socket.io-client";
import { useNavigate } from "react-router";
import { MeContext } from "contexts/meContext";

const socket = io("http://192.168.0.126:3001");

const usePlaying = () => {
  const navigate = useNavigate();
  const { setLoading } = useContext(LoadingContext);
  const { setMe } = useContext(MeContext);
  const { setResult, roomId, setRoomId, setPlayers, setGameState } =
    useContext(PlayContext);

  const handleChangeState = useCallback((room: any) => {
    setPlayers(room.players);
  }, []);

  const handleStartGame = useCallback(() => {
    setGameState("playing");
  }, []);

  const handleGameOver = useCallback((playData: any) => {
    setGameState("gameOver");
    setResult(playData.result);
    setPlayers(playData.elements);
    setLoading(false);
  }, []);

  useEffect(() => {
    socket.on("roomState", handleChangeState);
    socket.on("startGame", handleStartGame);
    socket.on("gameOver", handleGameOver);
  }, []);

  const joinRoom = ({ roomId, aliasName }: any) => {
    setRoomId(roomId);
    setMe(aliasName);
    socket.emit("joinRoom", { roomId, player: aliasName });
    navigate("/playing");
  };

  const play = (element: Elements) => {
    setLoading(true);
    socket.emit("play", { roomId, element });
  };

  const clearResult = () => {
    setResult(undefined);
    setGameState("playing");
    setLoading(false);
    socket.emit("resetGame", { roomId });
  };

  return {
    clearResult,
    joinRoom,
    play,
  };
};

export { usePlaying };
