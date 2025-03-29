import { forwardRef, useEffect, useImperativeHandle, useRef } from "react";
import Button from "./Button";
import Link from "next/link";

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
        className="w-[35%] backdrop:blur-sm backdrop:bg-black/90 mx-auto bg-black text-[#d3d3d3] border rounded-md shadow-slate-700 shadow-2xl p-5"
      >
        <h2 className="text-2xl">CART</h2>

        {children}

        <div className="flex content-center justify-between py-4">
          <Button
            className="border rounded-md flex items-center justify-center p-2 opacity-70 hover:opacity-100"
            onClick={onClose}
          >
            Continue Shopping
          </Button>
          <Link href="/checkout">
            <Button
              className="border rounded-md flex items-center justify-center p-2 opacity-70 hover:opacity-100"
              onClick={onClose}
            >
              Checkout
            </Button>
          </Link>
        </div>
        <form method="dialog"></form>
      </dialog>
    </div>
  );
}

export default CartModal;
