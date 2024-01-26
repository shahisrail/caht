/* eslint-disable no-unused-vars */
import React, { useCallback, useState } from "react";
import MessengerCustomerChat from "react-messenger-customer-chat";
import { useNavigate } from "react-router-dom";
import Course from "./Course/Course";

const Home = () => {
  const [value, setValue] = useState();
  const navigate = useNavigate();
  const handeljoinRoom = useCallback(() => {
    navigate(`/room/${value}`);
  }, [navigate, value]);
  return (
    <div>
      <h2>Hello</h2>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type="text"
        placeholder="Enter Room Code"
      />
      <button onClick={handeljoinRoom}>Join</button>
      <MessengerCustomerChat pageId="157693680759480" appId="297401713311254" />
      , <Course/>
    </div>
  );
};

export default Home;
