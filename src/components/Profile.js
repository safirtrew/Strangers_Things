import React, { useState, useEffect } from "react";
// import { connectProfile, getUser } from "./index";
import MessageForm from "./Messageform";

import { Link } from "react-router-dom";
import { connectProfile } from "../api";

export default function Profile() {
  let token = "";
  const [myInfo, setMyInfo] = useState({});
  useEffect(() => {
    token = localStorage.getItem("token");
    async function getMyInfo() {
      const response = await connectProfile(token);
      setMyInfo(response);
    }
    getMyInfo();
  }, []);
  const myInfoMapping =
    myInfo.data && myInfo.data.messages && myInfo.data.messages.length ? (
      myInfo.data.messages.map((element, index) => {
        return (
          <div key={`Profile${index}`}>
            <div className="card" style={{ width: 700 }}>
              <div className="card-body">
                <div id="inboxMessage">
                  <h4>From: {element.fromUser.username}</h4>
                  <h4>Response to Post: {element.post.title}</h4>
                  <h4>Message: {element.content}</h4>
                </div>
              </div>
            </div>
          </div>
        );
      })
    ) : (
      <h2>No messages to display</h2>
    );

  return (
    <div id="postBorder">
      {myInfo.data ? (
        <h1 className="display-4"> Welcome {myInfo.data.username} </h1>
      ) : (
        <h1>Please Login</h1>
      )}
      <hr></hr>
      <Link to="/NewPost">
        <button id="allButton" type="button" className="btn btn-dark">
          Create New Post
        </button>
      </Link>
      <Link to="/Posts">
        <button id="allButton" type="button" className="btn btn-dark">
          View All Posts
        </button>
      </Link>

      <Link to="/Logout">
        <button
          id="allButton"
          type="button"
          className="btn btn-dark"
          onClick={() => {
            localStorage.removeItem("token");
          }}
        >
          Log Out
        </button>
      </Link>
      <p className="h2">Message Inbox:</p>
      <div id="messageBox">{myInfoMapping}</div>
      <hr></hr>
    </div>
  );
}
