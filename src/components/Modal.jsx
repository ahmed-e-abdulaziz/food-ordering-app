import { useEffect, useRef } from "react";

export default function Modal({ open, children, onClose }) {
  const dialog = useRef();
  useEffect(() => {
    if (open) {
      dialog.current.showModal();
    } else {
      dialog.current.close();
    }
  }, [open]);

  return (
    <dialog ref={dialog} className="modal cart" onClose={onClose}>
      {children}
    </dialog>
  );
}
