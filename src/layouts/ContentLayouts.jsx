const ContentLayouts = ({ children, customClass, sectionRef, type }) => {
  return (
    <div
      ref={sectionRef}
      className={`py-20 max-w-7xl mx-auto min-h-screen ${customClass} ${
        type === "no-hero" && "pt-25"
      }`}
    >
      {children}
    </div>
  );
};

export default ContentLayouts;
