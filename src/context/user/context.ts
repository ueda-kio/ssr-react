import { createContext } from "react";
import { ActionType } from "./reducer";

export type User = {
  gender: "man" | "woman";
  age: number;
  member: string;
};

type UserContextProps = {
  user: User;
  dispatch: React.Dispatch<ActionType>;
};
const UserContext = createContext({} as UserContextProps);
export default UserContext;
