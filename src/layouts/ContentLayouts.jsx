import React from "react";

const ContentLayouts = ({ children, customClass, id, type }) => {
  return (
    <div
      id={id}
      className={`py-15 max-w-7xl mx-auto min-h-screen ${customClass} ${
        type === "no-hero" && "pt-20"
      }`}
    >
      {children}
    </div>
  );
};

export default ContentLayouts;
