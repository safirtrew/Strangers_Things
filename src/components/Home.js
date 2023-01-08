import React, { useEffect, useState } from "react";
<link rel="stylesheet" href="home.css"></link>;

function Home() {
  const jwt = localStorage.getItem("jwt") || "N/A";
  const [myUserName, setMyUserName] = useState("");

  async function getPersonalInfo() {
    const response = await fetch(
      "https://strangers-things.herokuapp.com/api/2209-ftb-et-web-pt/users/me",
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${jwt}`,
        },
      }
    );

    const json = await response.json();
    console.log(json);
    if (json.data.username) {
      setMyUserName(json.data.username);
    }
  }

  useEffect(() => {
    getPersonalInfo();
  }, []);

  return (
    <div>
      <h1>This is home page</h1>
      <p>this is my token: {jwt}</p>
      <p>Username: {myUserName}</p>
    </div>
  );
}

export default Home;
