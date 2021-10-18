import React from "react";
import dotShape from "../assets/images/money-png.jpg";
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <section id="home" class="hero-area bg_cover">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-xl-5 offset-xl-7 col-lg-8 offset-lg-2 col-md-10 offset-md-1">
            <div class="hero-content">
              <h2 class="mb-30 wow fadeInUp" data-wow-delay=".2s">
                Jam3yat
              </h2>

              <div class="hero-btns">
                <a
                  href="#jam3yat"
                  class="main-btn wow fadeInUp"
                  data-wow-delay=".6s"
                >
                  <Link to="/jam3yat">jam3yat</Link>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="hero-left">
        <img src={dotShape} alt="" class="shape" />
      </div>
    </section>
  );
}
