import { forwardRef, useImperativeHandle, useRef } from "react";

const CartModal = forwardRef(function CartModal({}, ref) {
  const dialog = useRef();

  useImperativeHandle(ref, () => {
    return {
      open: () => {
        dialog.current.showModal();
      },
    };
  });

  return (
    <div>
      <dialog
        ref={dialog}
        className="w-[50%] backdrop:blur-sm backdrop:bg-black/90 mx-auto text-center"
      >
        <div>THIS IS A CART</div>
        <form method="dialog"></form>
      </dialog>
    </div>
  );
});

export default CartModal;
