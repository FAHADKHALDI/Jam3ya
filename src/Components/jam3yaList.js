import React, { useState } from "react";
import jam3yaItem from "./jam3yaItem";
import { Button } from "react-bootstrap";
import AddJam3yaModal from "./addJam3yaModal";
import jam3yaStore from "../Stores/jam3yaStore";
import { observer } from "mobx-react";
function jam3yaList() {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);
  const jam3yat = jam3yaStore.jam3yat.map((jam3ya) => (
    <jam3yaItem jam3ya={jam3ya} />
  ));
  return (
    <section id="jam3yat" class="jam3yat-area pt-140 pb-170 hero-area bg_cover">
      <div class="container">
        <Button variant="warning" onClick={openModal}>
          Add jam3ya
        </Button>
        <AddCourseModal isOpen={isOpen} closeModal={closeModal} />
        <div class="row mb-30 mt-30">{j}</div>
      </div>
    </section>
  );
}

export default observer(jam3yaList);
