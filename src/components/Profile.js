import React from "react";
import { useState } from "react";

const Profile = (props) => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Profile</h1>
      <h3>name: {props.name}</h3>
      <h3>Count: {count}</h3>
      <button onClick={() => setCount(1)}>Count</button>
    </div>
  );
};

export default Profile;
