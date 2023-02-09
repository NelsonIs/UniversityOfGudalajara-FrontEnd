import { createContext, useState, useEffect } from "react";

export const SessionContext = createContext();

export function SessionContextProvider(props) {
  const [token, setToken] = useState(null);

  return (
    <SessionContext.Provider
      value={{
        token,
        setToken,
      }}
    >
      {props.children}
    </SessionContext.Provider>
  );
}
