import React from "react";

const ListLabel = ({ children }) => {
  return (
    <li className="bg-base-300 w-max p-1 px-2 rounded-md text-[11px] cursor-pointer hover:bg-base-200  transition-all 0.3s">
      {children}
    </li>
  );
};

export default ListLabel;
