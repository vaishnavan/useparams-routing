import React from "react";
import { Link } from "react-router-dom";

function Home({ myUser }) {
  return (
    <>
      {myUser.map((data) => {
        return (
          <div key={data.id}>
            <Link to={`/myData/${data.id}`}>{data.name}</Link>
          </div>
        );
      })}
    </>
  );
}

export default Home;
