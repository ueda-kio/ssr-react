import { createContext } from "react";
import { Action } from "./reducer";

type UserContextProps = {
  user: boolean;
  dispatch: React.Dispatch<Action>;
};
const UserContext = createContext({} as UserContextProps);
export default UserContext;
