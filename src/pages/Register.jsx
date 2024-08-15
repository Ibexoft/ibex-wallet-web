import React from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const Register = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <div className="container">
      <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
              <div className="d-flex justify-content-center py-4">
                <a
                  href="index.html"
                  className="logo d-flex align-items-center w-auto"
                >
                  <img src="assets/img/logo.png" alt="" />
                  <span className="d-none d-lg-block">Ibex Wallet</span>
                </a>
              </div>

              <div className="card mb-3">
                <div className="card-body">
                  <div className="pt-4 pb-2">
                    <h5 className="card-title text-center pb-0 fs-4">
                      Create an Account
                    </h5>
                    <p className="text-center small">
                      Enter your personal details to create account
                    </p>
                  </div>

                  <form className="row g-3 needs-validation" noValidate>
                    <div className="col-12">
                      <label htmlFor="yourName" className="form-label">
                        Your Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        id="yourName"
                        required
                      />
                      <div className="invalid-feedback">
                        Please, enter your name!
                      </div>
                    </div>

                    <div className="col-12">
                      <label htmlFor="yourEmail" className="form-label">
                        Your Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        id="yourEmail"
                        required
                      />
                      <div className="invalid-feedback">
                        Please enter a valid Email adddress!
                      </div>
                    </div>

                    <div className="col-12">
                      <label htmlFor="yourUsername" className="form-label">
                        Username
                      </label>
                      <div className="input-group has-validation">
                        <span
                          className="input-group-text"
                          id="inputGroupPrepend"
                        >
                          @
                        </span>
                        <input
                          type="text"
                          name="username"
                          className="form-control"
                          id="yourUsername"
                          required
                        />
                        <div className="invalid-feedback">
                          Please choose a username.
                        </div>
                      </div>
                    </div>

                    <div className="col-12">
                      <label htmlFor="yourPassword" className="form-label">
                        Password
                      </label>
                      <input
                        type="password"
                        name="password"
                        className="form-control"
                        id="yourPassword"
                        required
                      />
                      <div className="invalid-feedback">
                        Please enter your password!
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          name="terms"
                          type="checkbox"
                          value=""
                          id="acceptTerms"
                          required
                        />
                        <label
                          className="form-check-label"
                          htmlFor="acceptTerms"
                        >
                          I agree and accept the{" "}
                          <a href="#">terms and conditions</a>
                        </label>
                        <div className="invalid-feedback">
                          You must agree before submitting.
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <button className="btn btn-primary w-100">
                        Create Account
                      </button>
                    </div>
                    <div className="col-12">
                      <p className="small mb-0 text-center">
                        Already have an account?{" "}
                        <Link to={"/login"}>Log in</Link>
                      </p>
                    </div>
                    <div className="col-12 text-center mt-3 d-flex align-items-center">
                      <hr className="flex-grow-1" />
                      <span className="px-2">OR connect with</span>
                      <hr className="flex-grow-1" />
                    </div>

                    <div className="col-12 d-flex justify-content-around mt-3">
                      <button
                        className="btn btn-light d-flex align-items-center justify-content-center"
                        style={{
                          border: "1px solid #ddd",
                          width: "48px",
                          height: "48px",
                          borderRadius: "50%",
                        }}
                        onClick={() => loginWithRedirect()}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 48 48"
                        >
                          <path
                            fill="#4285F4"
                            d="M24 9.5c3.7 0 6.8 1.2 9.4 3.6l6.9-6.9C35.4 2.6 30.2 0 24 0 14.6 0 6.5 5.8 2.5 14.2l8.1 6.2C12.9 13.1 17.9 9.5 24 9.5z"
                          />
                          <path
                            fill="#34A853"
                            d="M46.5 24c0-1.5-.1-2.9-.4-4.2H24v8.1h12.7c-.5 2.5-2 4.6-4.3 6.1l6.8 6.9c4-3.6 6.3-8.9 6.3-14.9z"
                          />
                          <path
                            fill="#FBBC05"
                            d="M10.6 28.3c-1.3-1.1-2.4-2.6-3-4.3l-8.1 6.2C3.7 37 8.9 42.6 15.9 45.2l6.3-7.7c-3.1-1.1-5.7-3.2-7.6-6.2z"
                          />
                          <path
                            fill="#EA4335"
                            d="M24 48c6.1 0 11.2-2 15-5.4l-6.8-6.9c-2 1.3-4.5 2-7.3 2-6 0-11-4-12.8-9.4l-8.1 6.2c4.1 8.4 12.2 14.2 22.2 14.2z"
                          />
                          <path fill="none" d="M0 0h48v48H0z" />
                        </svg>
                      </button>
                      {/* Add similar buttons for other social logins (e.g., Facebook, GitHub) */}
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;
