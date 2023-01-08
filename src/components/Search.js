import React, { useState } from "react";
import { getPosts } from "../api/index";

export default function Search({ posts, setPosts, getPosts }) {
  const [searchTerm, setSearchTerm] = useState("");

  const postMatches = (post, text) => {
    const review = post.title.includes(text);
    return review;
  };
  const handleSubmit = () => {
    const filteredPosts = posts.filter((post) => postMatches(post, searchTerm));
    setPosts(filteredPosts);
    if (searchTerm.length) {
      getPosts();
    }
  };
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container-fluid">
        <form
          id="searchBar"
          onSubmit={(event) => {
            event.preventDefault();
            handleSubmit();
          }}
          className="d-flex input-group w-auto"
        >
          <label>Search Through Posts: </label>
          <input
            type="search"
            className="form-control rounded"
            placeholder="Search"
            id="messageInput"
            aria-label="Search"
            aria-describedby="search-addon"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
          ></input>
        </form>
      </div>
    </nav>
  );
}
