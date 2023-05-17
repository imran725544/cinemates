import React from "react";

export const Button = ({ children }) => {
  return (
    <button className=" w-64 text-2xl text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br rounded-lg p-2 font-meduim">
      {" "}
      {children}
    </button>
  );
};
