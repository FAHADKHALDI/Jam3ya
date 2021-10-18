import React, { useState } from "react";
import logo from "../assets/images/money.jpg";
import { Link, NavLink } from "react-router-dom";
import { Button } from "react-bootstrap";
import SignupModal from "./SignupModal";
import authStore from "../Stores/authStore";
import { observer } from "mobx-react";

function Nav() {
  const [signupIsOpen, setSignupIsOpen] = useState(false);
  const [signIn, setSignIn] = useState(false);

  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <NavLink to="/">
            <img id="logo" src={logo} alt="Logo" width="77" height="77" />
          </NavLink>
        </a>

        <h5 className="nav-item">
          <Link to="/">Home</Link>
        </h5>
        <h5 className="nav-item">
          <NavLink to="jam3ya">jam3yat</NavLink>
        </h5>
        {authStore.user ? (
          <>
            <h5 className="nav-item">Hello {authStore.user.username}</h5>
            <h5 className="nav-item">
              <Button onClick={() => authStore.logout()}>Logout</Button>{" "}
            </h5>
          </>
        ) : (
          <>
            <h5 className="nav-item">
              <Button
                onClick={() => {
                  setSignupIsOpen(true);
                  setSignIn(false);
                }}
              >
                Sign up
              </Button>
            </h5>
            <h5>
              <Button
                onClick={() => {
                  setSignupIsOpen(true);
                  setSignIn(true);
                }}
              >
                Sign in
              </Button>
              <SignupModal
                signIn={signIn}
                closeModal={() => setSignupIsOpen(false)}
                isOpen={signupIsOpen}
              />
            </h5>
          </>
        )}
      </div>
    </nav>
  );
}
export default observer(Nav);
