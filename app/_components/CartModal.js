import { forwardRef, useEffect, useImperativeHandle, useRef } from "react";

function CartModal({ open, children, onClose }) {
  const dialog = useRef();

  useEffect(() => {
    if (open) {
      dialog.current.showModal();
    } else {
      dialog.current.close();
    }
  }, [open]);

  return (
    <div>
      <dialog
        ref={dialog}
        onClose={onClose}
        className="w-[50%] min-h-[300] backdrop:blur-sm backdrop:bg-black/90 mx-auto text-center"
      >
        {children}
        <form method="dialog"></form>
      </dialog>
    </div>
  );
}

export default CartModal;
