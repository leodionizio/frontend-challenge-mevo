import { Heading, Input, Stack, Text } from "@chakra-ui/react";
import { Button } from "components/ui/button";
import { Field } from "components/ui/field";
import { usePlaying } from "hooks/usePlaying";
import { useState } from "react";

export type RoomPlayer = {
  roomId?: string;
  aliasName?: string;
};

export const EnterRoom = () => {
  const [roomPlayer, setRoomPlayer] = useState<RoomPlayer | undefined>({});
  const { joinRoom } = usePlaying();

  return (
    <Stack gap={4} width="full" maxW={400}>
      <Stack textAlign="center" mb={8} mt={8}>
        <Heading fontSize={36}>JokenPo</Heading>
        <Text fontSize={16}>Pedra, Papel e Tesoura</Text>
      </Stack>
      <Field label="Room ID">
        <Input
          placeholder="4456"
          value={roomPlayer?.aliasName}
          onChange={(e) =>
            setRoomPlayer({ ...roomPlayer, aliasName: e.target.value })
          }
        />
      </Field>

      <Field label="Your Name">
        <Input
          placeholder="Jhon Snow"
          value={roomPlayer?.roomId}
          onChange={(e) =>
            setRoomPlayer({ ...roomPlayer, roomId: e.target.value })
          }
        />
      </Field>

      <Button onClick={() => joinRoom(roomPlayer)}>Join Room</Button>
    </Stack>
  );
};
