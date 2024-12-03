import { Stack } from "@chakra-ui/react";
import { Button } from "components/ui/button";
import { usePlaying } from "hooks/usePlaying";
import { useState } from "react";

export type RoomPlayer = {
  roomId?: string;
  aliasName?: string;
};

export const EnterRoom = () => {
  const [roomPlayer, setRoomPlayer] = useState<RoomPlayer | undefined>({});
  const { players, joinRoom, gameState } = usePlaying();

  return (
    <Stack mb={8}>
      <input
        value={roomPlayer?.aliasName}
        onChange={(e) =>
          setRoomPlayer({ ...roomPlayer, aliasName: e.target.value })
        }
        placeholder="Enter alias name"
      />
      <input
        value={roomPlayer?.roomId}
        onChange={(e) =>
          setRoomPlayer({ ...roomPlayer, roomId: e.target.value })
        }
        placeholder="Enter room ID"
      />
      <Button onClick={() => joinRoom(roomPlayer)}>Join Room</Button>

      <p>STATUS:{gameState}</p>

      <p>PLAYERS: {JSON.stringify(players)}</p>
      <p>Room details: {JSON.stringify(roomPlayer)}</p>
    </Stack>
  );
};
