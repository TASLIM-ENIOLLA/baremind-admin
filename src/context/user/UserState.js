import React, { useReducer } from "react";
import userContext from "./userContext";
import userReducer from "./userReducer";
import { TOGGLE } from "./../types";

const UserState = (props) => {
  const defaultState = {
    users: {},
    toggle: false,
  };

  const setToggle = () => {
    dispatch({
      type: TOGGLE,
    });
  };

  const [state, dispatch] = useReducer(userReducer, defaultState);

  return (
    <userContext.Provider
      value={{
        toggle: state.toggle,
        users:  state.users,
        setToggle,
      }}
    >
      {props.children}
    </userContext.Provider>
  );
};

export default UserState;
