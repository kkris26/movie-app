import React from "react";
import { Link } from "react-router-dom";

const WarningModal = ({ ref, action, cancel, item }) => {
  const closeWarningModal = () => {
    setTimeout(() => {
      ref.current.close();
    }, 100);
  };
  return (
    <dialog ref={ref} id="my_modal_1" className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-xl ">Are you sure?</h3>
        <p className="py-4 font-light">
          This action will permanently remove{" "}
          <Link
            onClick={closeWarningModal}
            to={"/movie/" + item.id}
            className="underline underline-offset-2"
          >
            {item.title}
          </Link>{" "}
          from your favorite list. Do you want to proceed?
        </p>
        <div className="modal-action">
          <form method="dialog" className="flex gap-2">
            <button className="btn" onClick={action}>
              Yes, remove it
            </button>
            <button className="btn-primary btn" onClick={cancel}>
              Cancel
            </button>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default WarningModal;
