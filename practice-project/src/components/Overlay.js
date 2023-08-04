import React from "react";

const Overlay = (props) => {
  const modalBackground = document.querySelector(".modal-background");
  if (modalBackground) {
    modalBackground.addEventListener("click", () => {
      document.querySelector(".modal").classList.remove("is-active");
      props.onChangeOverlay(false);
    });
  }

  const modalDelete = document.querySelector(".delete");
  if (modalDelete) {
    modalDelete.addEventListener("click", () => {
      document.querySelector(".modal").classList.remove("is-active");
      props.onChangeOverlay(false);
    });
  }

  return (
    <div className={`modal ${props.showOverlay ? "is-active" : ""}`}>
      <div className="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p
            style={{ color: "red", fontWeight: "600" }}
            className="modal-card-title"
          >
            Invalid Input
          </p>
          <button class="delete" aria-label="close"></button>
        </header>
        <section class="modal-card-body">{props.message}</section>
        <footer class="modal-card-foot"></footer>
      </div>
      <button className="modal-close is-large" aria-label="close"></button>
    </div>
  );
};

export default Overlay;
