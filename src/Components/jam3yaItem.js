import React from "react";

export default function jam3yaItem(props) {
  const jam3ya = props.jam3ya;
  return (
    <div class="col-xl-4 col-lg-4 col-md-6">
      <div class="single-course wow fadeInUp" data-wow-delay=".2s">
        <div class="course-img">
          <a href="course-single.html">
            <img src={jam3ya.Image} alt="" />
          </a>
        </div>
        <div class="jam3ya-info">
          <h4>
            <a href="course-single.html">{jam3ya.title}</a>
          </h4>
          <div class="course-meta">Jam3ya : {jam3ya.Amount}</div>
          <div class="course-meta">
            the Duration of the Jam3ya in months : {jam3ya.duration}
          </div>
          <div class="course-meta">
            users that joined the jam3ya : {jam3ya.Amount}
          </div>
          <div class="course-meta">start date : {jam3ya.Amount}</div>
          <div class="course-meta">end date : {jam3ya.Amount}</div>
          <div class="course-meta">the Creator : {jam3ya.Amount}</div>
        </div>
      </div>
    </div>
  );
}
export default jam3yaItem
// we will need to change the .amount from title 22-26
// Title, Image, Amount to pay monthly, The duration of the jam3ya in months,
// Users that joined this jam3ya, Start date, End date, The user who created the jam3ya.
