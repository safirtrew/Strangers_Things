import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUser } from "../api/index";
import { Link } from "react-router-dom";

export const cohortName = "2209-ftb-et-web-pt";
export const BASE_URL = `https://strangers-things.herokuapp.com/api/`;

export default function Register() {
  let navigate = useNavigate();
  const [newUsername, setnewUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();

    const token = await createUser(newUsername, password);
    localStorage.setItem("token", token);
    navigate("/Login");
  }
  return (
    <>
      <section className="text-center text-lg-start">
        <div className="container py-4">
          <div className="row g-0 align-items-center">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <div className="card cascading-right">
                <div className="card-body p-5 shadow-5 text-center">
                  <h2 className="fw-bold mb-5">REGISTER</h2>
                  <form onSubmit={handleSubmit} id="loginPage">
                    <div className="form-outline mb-4">
                      <label
                        className="form-label"
                        htmlFor="form3Example3"
                      ></label>
                      <input
                        id="form3Example3"
                        className="form-control"
                        placeholder="Choose Your New Username"
                        type="text"
                        minLength="6"
                        required
                        onChange={(event) => setnewUsername(event.target.value)}
                      ></input>
                    </div>
                    <div className="form-outline mb-4">
                      <label
                        className="form-label"
                        htmlFor="form3Example4"
                      ></label>
                      <input
                        id="form3Example4"
                        className="form-control"
                        placeholder="Choose Your New Password"
                        type="password"
                        required
                        minLength="6"
                        onChange={(event) => setPassword(event.target.value)}
                      ></input>
                    </div>
                    <div className="form-outline mb-4">
                      <label
                        className="form-label"
                        htmlFor="form3Example4"
                      ></label>
                      <input
                        id="form3Example4"
                        className="form-control"
                        placeholder="Confirm Password"
                        type="password"
                        minLength="6"
                        required
                        onChange={(event) =>
                          setConfirmPassword(event.target.value)
                        }
                      ></input>
                    </div>

                    <button
                      className="btn btn-primary btn-block mb-4"
                      type="submit"
                    >
                      Create Account
                    </button>
                    <div className="form-outline mb-4">
                      <Link to="/Posts">
                        {" "}
                        <button className="btn btn-secondary">
                          View As Guest
                        </button>
                      </Link>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-lg-5 mb-5 mb-lg-0"></div>
          </div>
        </div>
      </section>
    </>
  );
}

// import { useHistory } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
// import { createUser } from "../api/Index";
// import { Link } from "react-router-dom";

// const Register = ({
//   username,
//   password,
//   setUsername,
//   setPassword,
//   setToken,
// }) => {
//   const history = useHistory();

//   return (
//     <form
//       className={styles.container}
//       onSubmit={async (event) => {
//         event.preventDefault();

//         const responseToken = await Register(username, password);

//         setUsername("");
//         setPassword("");
//         setToken(responseToken);

//         history.push("/posts");
//       }}
//     >
//       <label>
//         Username&nbsp;
//         <input onChange={setUsername} value={username} />
//       </label>
//       <label>
//         Password&nbsp;
//         <input onChange={setPassword} value={password} type={"password"} />
//       </label>
//       <button>Sign Up</button>
//     </form>
//   );
// };

// export default Register;
