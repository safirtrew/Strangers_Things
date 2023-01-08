import React, { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import Title from "./Title";
// import Header from "./Header";
import Posts from "./Posts";
import Profile from "./Profile";
import NewPost from "./NewPost";
import MessageForm from "./Messageform";
import Search from "./Search";
import "./App.css";
import { Logout } from ".";

const App = () => {
  const [postValue, setPostValue] = useState("");
  const [messages, setMessages] = useState([]);
  const [posts, setPosts] = useState([]);

  return (
    <Router>
      <Title />
      <Routes>
        <Route exact path="/Register" element={<Register />}></Route>
        <Route exact path="/Login" element={<Login />}></Route>
        <Route
          exact
          path="/Posts"
          element={
            <Posts
              postValue={postValue}
              setPostValue={setPostValue}
              posts={posts}
              setPosts={setPosts}
            />
          }
        ></Route>
        <Route
          exact
          path="/Profile"
          element={<Profile messages={messages} setMessages={setMessages} />}
        ></Route>
        <Route exact path="/NewPost" element={<NewPost />}></Route>
        <Route exact path="/Logout" element={<Logout />}></Route>
        <Route exact path="/MessageForm" element={<MessageForm />}></Route>
        <Route exact path="/Search" element={<Search />}></Route>
      </Routes>
    </Router>
  );
};

export default App;

// import logo from './logo.svg';
// import './App.css';

// function App(){

//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');

//   function handleSubmit(){
//       console.log ('${firstName} ${lastName}')
//   }
//   return(
//       <div>
//           <form onSubmit={}>
//               <label> First name:</label>
//               <input type="text" id="fname" name="fname" onChange={(event) => setFirstName(event.target.value)}/>
//               <label> Last name:</label>
//               <input type="text" id="lname" name="lname" onChange={(event) => setLastName (event.target.value)}/>

//               <button type="submit">Submit</button>
//           </form>
//       </div>
//   )
// }

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
