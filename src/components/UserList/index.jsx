import React from "react";
import { ButtonPicture } from "../ButtonPicture";
import { List, User, Text } from "./styles";
import dogPicture from "@images/photo-1518155317743-a8ff43ea6a5f.jpeg";

export const UserList = () => {
  return (
    <List>
      <User>
        <ButtonPicture src={dogPicture} size={40} />
        <Text>
          <b>El Dogo</b>
        </Text>
      </User>
      <User>
        <ButtonPicture src={dogPicture} size={40} decorated={true} />
        <Text>
          <b>El Dogo</b>
        </Text>
      </User>
      <User>
        <ButtonPicture src={dogPicture} size={40} />
        <Text>
          <b>El Dogo</b>
        </Text>
      </User>
      <User>
        <ButtonPicture src={dogPicture} size={40} />
        <Text>
          <b>El Dogo</b>
        </Text>
      </User>
      <User>
        <ButtonPicture src={dogPicture} size={40} />
        <Text>
          <b>El Dogo</b>
        </Text>
      </User>
      <User>
        <ButtonPicture src={dogPicture} size={40} />
        <Text>
          <b>El Dogo</b>
        </Text>
      </User>
    </List>
  );
};
