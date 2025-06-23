import React from "react";

const ContentLayouts = ({ children, customClass, id }) => {
  return (
    <div id={id} className={`py-15 ${customClass}`}>
      {children}
    </div>
  );
};

export default ContentLayouts;
