import React from "react";
import { Link } from "react-router-dom";

export default function LoggedOut() {
  return (
    <div>
      <div id="logoutImage">
        <img
          src="https://www.petinsurancequotes.com/app/uploads/2018/11/shih-tzu-dog-insurance.jpeg"
          alt="shih tzu puppy"
          className="w-100 rounded-t-5 rounded-tr-lg-0 rounded-bl-lg-5"
        />
      </div>
      <Link to="/Login">
        <button id="logBackIn" className="btn btn-dark">
          Log back in?
        </button>
      </Link>
    </div>
  );
}
