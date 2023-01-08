import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { sendMessage } from "../api/index";

export default function MessageForm(props) {
  const { postId } = props;

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const content = event.target[0].value;
    const token = localStorage.getItem("token");
    sendMessage(token, postId, content);
    navigate("/Profile");
  };
  return (
    <form onSubmit={handleSubmit} id="messageForm">
      <div className="input-group">
        <label id="messageForm">Direct Message: </label>
        <input
          id="messageInput"
          type="text"
          placeholder=" Questions? Write Here!"
          aria-label="Search"
          aria-describedby="search-addon"
        ></input>
        <button id="submitButton" className="btn btn-outline-dark">
          Submit
        </button>
      </div>
    </form>
  );
}
