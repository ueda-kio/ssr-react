import { User } from "./context";

export const SET_MAN = "SET_MAN";
export const setManToGenderAction = () => {
  return {
    type: "SET_MAN",
    payload: {
      gender: "man",
    },
  };
};

export const SET_WOMAN = "SET_WOMAN";
export const setWomanToGenderAction = () => {
  return {
    type: "SET_WOMAN",
    payload: {
      gender: "woman",
    },
  };
};

export const SET_MEMBER = "SET_MEMBER";
export const setMemberAction = (member: string) => {
  return {
    type: "SET_MEMBER",
    payload: {
      member,
    },
  };
};
