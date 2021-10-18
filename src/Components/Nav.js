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
    <header>
      <nav>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="toggler-icon"></span>
          <span className="toggler-icon"></span>
          <span className="toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse sub-menu-bar"
          id="navbarSupportedContent"
        >
          <ul id="nav" className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to="/">Home</Link>
            </li>
            <li className="nav-item">
              <NavLink to="/jam3ya">jam3yat</NavLink>
            </li>

            {authStore.user ? (
              <>
                <li className="nav-item">Hello {authStore.user.username}</li>
                <li className="nav-item">
                  <Button onClick={() => authStore.logout()}>Logout</Button>{" "}
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Button
                    onClick={() => {
                      setSignupIsOpen(true);
                      setSignIn(false);
                    }}
                  >
                    Sign up
                  </Button>
                </li>
                <li>
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
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default observer(Nav);
