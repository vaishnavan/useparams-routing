import React from "react";
import { useParams } from "react-router-dom";

function Display({ myUserData }) {
  const { id } = useParams();

  const myData = myUserData.filter((data) => data.id == id);

  return (
    <>
      {myData.map((data) => {
        return (
          <div key={data.id}>
            <h1>{data.username}</h1>
            <h3>{data.email}</h3>
            <p>{data.name}</p>
          </div>
        );
      })}
    </>
  );
}

export default Display;
