import React, { useRef } from "react";

import "../../../../../assets/admin/css/modal.scss";

export default function Index({ show, showModalSet, children }) {
  const modalRef = useRef(null);

  function handleClick(e) {
    if (e.target === modalRef.current) showModalSet(false);
  }

  return (
    <div
      className={`modal-custom ${show ? "d-block" : "d-none"}`}
      onClick={handleClick}
      show={toString(show)}
      ref={modalRef}
    >
      {children}
    </div>
  );
}
