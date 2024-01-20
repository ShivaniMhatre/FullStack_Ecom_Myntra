import axios from "axios";
import api from '../Config/APIConfig.js'
import React, { createContext, useEffect, useReducer } from "react";

export const MyntraContext = createContext();

const initialState = { currentuser: null };
const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        currentuser: action.payload,
      };

    case "LOGOUT":
      return {
        ...state,
        currentuser: null,
      };

    default:
      return state;
  }
};

const MyContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  console.log(state);

  const login = (userData, token) => {
    localStorage.setItem("myntraToken", JSON.stringify(token));
    dispatch({
      type: "LOGIN",
      payload: userData,
    });
  };
  const logout = () => {
    localStorage.removeItem("myntraToken");
    dispatch({
      type: "LOGOUT",
    });
  };

  useEffect(() => {
    async function getCurremtUser() {
      const token = JSON.parse(localStorage.getItem("myntraToken"));

      try {
        const response = await api.post("/currentuser", {
          token,
        });

        if (response.data.success) {
          dispatch({
            type: "LOGIN",
            payload: response.data.user,
          });
        }
      } catch (error) {
        console.log(error);
      }
    }

    getCurremtUser();
  }, []);

  return (
    <>
      <MyntraContext.Provider value={{ state, login, logout }}>
        {children}
      </MyntraContext.Provider>
    </>
  );
};

export default MyContext;
