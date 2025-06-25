const ContentLayouts = ({ children, customClass, sectionRef, type }) => {
  return (
    <div
      ref={sectionRef}
      className={`py-15 max-w-7xl mx-auto min-h-screen ${customClass} ${
        type === "no-hero" && "pt-20"
      }`}
    >
      {children}
    </div>
  );
};

export default ContentLayouts;
