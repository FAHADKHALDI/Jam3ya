import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { observer } from "mobx-react";
function j() {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);
  const j = Store.j.map((course) => <jItem j={j} />);
  return (
    <section id="j" class="j-area pt-140 pb-170 hero-area bg_cover">
      <div class="container">
        <Button variant="warning" onClick={openModal}>
          Add Course
        </Button>
        <AddCourseModal isOpen={isOpen} closeModal={closeModal} />
        <div class="row mb-30 mt-30">{j}</div>
      </div>
    </section>
  );
}

export default observer(jList);
