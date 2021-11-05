import React, { useReducer, createContext } from "react";

export const UPDATE_COLOR = "UPDATE_COLOR";

export const ColorContext = createContext();

export const Color = (props) => {
  const [color, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case UPDATE_COLOR:
        return action.color;
      default:
        return state;
    }
  }, "blue");

  return (
    <ColorContext.Provider value={{ color, dispatch }}>
      {props.children}
    </ColorContext.Provider>
  );
};
