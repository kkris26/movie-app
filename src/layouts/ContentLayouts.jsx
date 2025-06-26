const ContentLayouts = ({ children, customClass, sectionRef, type }) => {
  return (
    <div
      ref={sectionRef}
      className={`pb-12 md:pb-15 lg:pb-20 max-w-7xl mx-auto  px-4 lg:px-0 ${customClass} ${
        type === "no-hero" && "pt-22 lg:pt-25"
      }`}
    >
      {children}
    </div>
  );
};

export default ContentLayouts;
