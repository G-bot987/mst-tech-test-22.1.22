import React, { useState, useEffect } from "react";
import socketIOClient from "socket.io-client";
const ENDPOINT = "https://mst-full-stack-dev-test.herokuapp.com/";

function App() {
  const [response, setResponse] = useState("loading");
  const socket = socketIOClient(ENDPOINT);

  useEffect(() => {
    socket.on("data-update", (data) => {
      console.log(data);
      setResponse(data);
    });
  }, []);

  return <p>{JSON.stringify(response)}</p>;
}

export default App;
