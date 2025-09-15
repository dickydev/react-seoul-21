import React, { useState } from "react";

export const MapStateExample: React.FC = () => {
  const [userMap, setUserMap] = useState<Map<string, string>>(new Map());

  const handleAddUser = () => {
    const newMap = new Map(userMap);
    newMap.set("John", "john@email.com");
    newMap.set("Valkrie", "val@email.com");
    setUserMap(newMap);
  };

  console.log(userMap);
  return (
    <div>
      <h1>Contoh Map sebagai State</h1>
      <button onClick={handleAddUser}>Tambahkan User</button>
      <ul>
        {[...userMap.entries()].map(([name, email], index) => (
          <li key={index}>
            {name} : {email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export const ObjectStateExample = () => {
  const [users, setUsers] = useState<{ [key: string]: string }>({});

  const handleAddUser = (name: string, email: string) => {
    setUsers((prev) => ({
      ...prev,
      [name]: email,
    }));
  };

  console.log(users);
  return (
    <div>
      <h1>Contoh Map sebagai State</h1>
      <button onClick={() => handleAddUser("John", "john@example.com")}>
        Tambahkan John
      </button>
      <button onClick={() => handleAddUser("Valkrie", "val@example.com")}>
        Tambahkan Val
      </button>
      <ul>
        {Object.entries(users).map(([name, email], index) => (
          <li key={index}>
            {name} : {email}
          </li>
        ))}
      </ul>
    </div>
  );
};
