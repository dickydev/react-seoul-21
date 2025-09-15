import React, { useState, useEffect } from "react";

type Geo = {
  lat: string;
  lng: string;
};

type Address = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
};

type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
};

const FetchUserData: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        if (!response.ok) {
          throw new Error(`HTTP Error! status : ${response.status}`);
        }

        const data = await response.json();
        setUsers(data);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unknown error occured");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  console.log(users);

  return (
    <>
      <h1>Daftar Pengguna</h1>
      {loading && <p>Loadingg.....</p>}
      {error && <p style={{ color: "red" }}>Error : {error}</p>}

      <ul>
        {users.map((data) => (
          <li
            key={data.id}
            style={{
              backgroundColor: "Red",
              margin: 10,
              color: "white",
              height: "50px",
              textAlign: "center",
            }}
            className=""
          >
            Name : {data.name} | Username : {data.username} | Email :{" "}
            {data.email} | Alamat : {data.address.city}, {data.address.geo.lat}
          </li>
        ))}
      </ul>
    </>
  );
};

export default FetchUserData;
