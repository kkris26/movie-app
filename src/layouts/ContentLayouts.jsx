import React from "react";

const ContentLayouts = ({ children, customClass }) => {
  return <div className={`my-10 ${customClass}`}>{children}</div>;
};

export default ContentLayouts;
