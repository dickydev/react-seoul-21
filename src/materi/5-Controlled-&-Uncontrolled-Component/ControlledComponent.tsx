import React, { useState, type ChangeEvent, type FormEvent } from "react";

export const ControlledForm: React.FC = () => {
  const [name, setName] = useState("");

  // Event handler untuk menangani perubahan pada input
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value); // Mengatur nilai state berdasarkan input pengguna
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(`Form Submitted with Name: ${name}`);
  };

  console.log(name);
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        value={name} // Nilai input dikontrol oleh state `name`
        onChange={handleInputChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
};
