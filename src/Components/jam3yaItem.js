import React from "react";

export default function jam3yaItem({ jam3ya }) {
  return (
    <div>
      <img src={jam3ya.image} />
      <p>{jam3ya.title}</p>
    </div>
  );
}

// we will need to change the .amount from title 22-26
// Title, Image, Amount to pay monthly, The duration of the jam3ya in months,
// Users that joined this jam3ya, Start date, End date, The user who created the jam3ya.
