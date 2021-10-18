import React from "react";

export default function jam3yaItem(props) {
  const jam3ya = props.jam3ya;
  return (
    <div class="col-xl-4 col-lg-4 col-md-6">
      <div class="single-course wow fadeInUp" data-wow-delay=".2s">
        <div class="course-img">
          <a href="course-single.html">
            <img src={jam3ya.image} alt="" />
          </a>
        </div>
        <div class="jam3ya-info">
          <h4>
            <a href="course-single.html">{jam3ya.title}</a>
          </h4>
          <div class="course-meta">Jam3ya : {jam3ya.title}</div>
        </div>
      </div>
    </div>
  );
}
