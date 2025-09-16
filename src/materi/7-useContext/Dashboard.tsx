import React from "react";
import { useContext } from "react";
import { UserContext } from "./context/UserProvider";

const Dashboard: React.FC = () => {
  const context = useContext(UserContext);
  if (!context) return <div>Error: UserContext not found</div>;

  const { user, setUser } = context;

  return (
    <>
      <h1>Dashboard</h1>
      <h3>User : {user}</h3>
      <button onClick={() => setUser("Captain Indonesia")}>Ubah User</button>
      <button onClick={() => setUser("")}>clear</button>
    </>
  );
};

export default Dashboard;
