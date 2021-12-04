import { Avatar, Button } from "@mui/material";

import React from "react";
import "./profile.css";

const Profile = ({ fullName, bio, profession, handleName, children }) => {
  let name = "salem memmi";

  return (
    <div
      class="container"
      style={{
        background: `url(${children.props.src})`,
        backgroundSize: " 100%",
        backgroundRepeat: "no-repeat",
      }}
    >
      <di class="container__profile">
        <Avatar sx={{ bgcolor: "#1E90FF" }}>S</Avatar>
        <div class="container__profile__text">
          <h2>{fullName}</h2>
          <p>
            <b>{bio}</b>
          </p>
          <p>
            by <b>{profession}</b>
          </p>
        </div>
        <Button
          variant="contained"
          onClick={() => handleName(name)}
          className="buttons"
        >
          Send Me
        </Button>
      </di>
    </div>
  );
};

export default Profile;
