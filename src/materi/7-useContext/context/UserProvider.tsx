import React, { createContext, useState, type ReactNode } from "react";

type UserContextProps = {
  user: string;
  setUser: React.Dispatch<React.SetStateAction<string>>;
};

// eslint-disable-next-line react-refresh/only-export-components
export const UserContext = createContext<UserContextProps | null>(null);

export const UserProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState("Ucup");
  
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
