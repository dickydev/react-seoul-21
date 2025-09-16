import React, { useState } from "react";

export const IncorrectFormHandling: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleClick = () => {
    console.log(`Name: ${name}, Email: ${email}`);
  };

  return (
    <div>
      <label>
        Name:
        <input value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label>
        Email:
        <input value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      {/* Tidak ideal menggunakan onClick di sini */}
      <button onClick={handleClick}>Submit</button>
    </div>
  );
};
