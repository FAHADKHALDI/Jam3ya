import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { observer } from "mobx-react";
function jam3yaList() {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);
  const jam3yat = jam3yaStore.jam3yat.map((course) => <jItem j={j} />);
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
