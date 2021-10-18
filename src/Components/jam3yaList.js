import React, { useState } from "react";
// import jam3yaItem from "./jam3yaItem";
// import { Button } from "react-bootstrap";
// import AddJam3yaModal from "./addJam3yaModal";
import jam3yaStore from "../Stores/jam3yaStore";
import { observer } from "mobx-react";
import authStore from "../Stores/authStore";
function jam3yaList() {
  if (authStore.user) {
    jam3yaStore.fetchJam3ya();
  }
  // if (!jam3yaStore.jam3yat) return <p>loading</p>;

  // const [isOpen, setIsOpen] = useState(false);
  // const closeModal = () => setIsOpen(false);
  // const openModal = () => setIsOpen(true);
  const jam3yat = jam3yaStore.jam3yat.map((jam3ya) => (
    <jam3yaItem jam3ya={jam3ya} />
  ));
  console.log(jam3yaStore.jam3yat);
  return (
    // <section id="jam3yat" class="jam3yat-area pt-140 pb-170 hero-area bg_cover">
    // <div class="container">
    //   {jam3yat}
    <p>hello!</p>
    //   <Button variant="warning" onClick={openModal}>
    //     Add jam3ya
    //   </Button>
    //   <AddCourseModal isOpen={isOpen} closeModal={closeModal} />
    //   <div class="row mb-30 mt-30">{j}</div>
    // </div>
    // </section>
  );
}

export default observer(jam3yaList);
// {/* <div className="cookie-list">{cookielist}</div>; */}
// jam3yat which is in line 11
