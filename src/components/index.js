import React from "react";
import ReactDOM from "react-dom/client";
// import './index.css';
import App from "./App";
// import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

export { default as App } from "./App";
export { default as Login } from "./Login";
export { default as Logout } from "./Logout";
export { default as Register } from "./Register";
export { default as Title } from "./Title";
export { default as Posts } from "./Posts";
export { default as Profile } from "./Profile";
export { default as NewPost } from "./NewPost";
export { default as MessageForm } from "./Messageform";
export { default as Search } from "./Search";

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
