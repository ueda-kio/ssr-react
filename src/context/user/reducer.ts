import * as Actions from "./action";
import { User } from "./context";

// export type Action = "SET_MAN" | "SET_WOMAN";
export type ActionType = {
  type: string;
  payload: Record<string, string>;
};
export const userReducer = (state: User, action: ActionType) => {
  switch (action.type) {
    case Actions.SET_MAN:
      return {
        ...state,
        ...action.payload,
      };
    case Actions.SET_WOMAN:
      return {
        ...state,
        ...action.payload,
      };
    case Actions.SET_MEMBER:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
