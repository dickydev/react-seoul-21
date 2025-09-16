import React, { useRef, type FormEvent } from "react";

export const UncontrolledForm: React.FC = () => {
  const nameInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Mengakses nilai input menggunakan `ref`
    const name = nameInputRef.current?.value;
    console.log(`Form Submitted with Name: ${name}`);
  };

  console.log(nameInputRef);

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" ref={nameInputRef} />{" "}
      {/* Ref digunakan di sini */}
      <button type="submit">Submit</button>
    </form>
  );
};
