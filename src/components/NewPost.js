import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { addPosts } from "../api/index";

export default function NewPost() {
  let navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState("");
  const [willDeliver] = useState(false);

  const authToken = localStorage.getItem("token") ? true : false;

  async function handleSubmit(event) {
    event.preventDefault();

    const postDetail = {
      title: title,
      description: description,
      location: location,
      price: price,
      willDeliver: willDeliver,
    };

    const token = localStorage.getItem("token");

    const response = await addPosts(postDetail, token);

    navigate("/Posts");
    return response;
  }
  return (
    <section className=" text-center text-lg-start">
      <div className="card mb-3">
        <div className="row g-0 d-flex align-items-center">
          <div className="col-lg-4 d-none d-lg-flex"></div>
          <div className="col-lg-8">
            <div className="card-body py-5 px-md-5">
              {authToken === true ? (
                <>
                  <h1>Create a New Post</h1>
                  <form onSubmit={handleSubmit}>
                    <div className="form-outline mb-4">
                      <input
                        id="form2Example1"
                        className="form-control"
                        type="text"
                        onChange={(event) => setTitle(event.target.value)}
                        placeholder="title"
                      ></input>
                      <input
                        id="form2Example1"
                        className="form-control"
                        type="text"
                        onChange={(event) => setDescription(event.target.value)}
                        placeholder="description"
                      ></input>
                      <input
                        id="form2Example1"
                        className="form-control"
                        type="text"
                        onChange={(event) => setLocation(event.target.value)}
                        placeholder="location"
                      ></input>
                      <input
                        id="form2Example1"
                        className="form-control"
                        type="text"
                        onChange={(event) => setPrice(event.target.value)}
                        placeholder="price"
                      ></input>
                      <button className="btn btn-dark" id="newPostButton">
                        Submit New Post
                      </button>
                    </div>
                  </form>
                </>
              ) : (
                <h2>Please Login Before Attempting To Post</h2>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
