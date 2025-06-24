import React from "react";

const ContentLayouts = ({ children, customClass, id }) => {
  return (
    <div id={id} className={`py-15 max-w-7xl mx-auto ${customClass}`}>
      {children}
    </div>
  );
};

export default ContentLayouts;
