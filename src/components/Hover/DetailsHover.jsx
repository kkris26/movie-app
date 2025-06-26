const DetailsHover = ({ children, customClass ="text-xs" }) => {
  return (
    <p
      className={`${customClass} text-base-content bg-base-300 right-0 w-max px-2 py-[2px] z-2 border border-base-100 rounded-sm absolute btn-xs  opacity-0 translate-y-2 group-hover:opacity-1000 group-hover:translate-y-0 transition duration-300 ease-in-out`}
    >
      {children}
    </p>
  );
};

export default DetailsHover;
