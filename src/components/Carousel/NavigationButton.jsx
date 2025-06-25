const NavigationButton = ({ children, action, ref }) => {
  return (
    <button
      className="btn btn-sm text-base-content z-9 px-3"
      onClick={() =>
        action === "next" ? ref.current?.slideNext() : ref.current?.slidePrev()
      }
    >
      {children}
    </button>
  );
};

export default NavigationButton;
