const DetailsHover = ({ children, customClass ="text-xs" }) => {
  return (
    <p
      className={`${customClass} bg-base-300 right-0 w-max px-2 py-[2px] z-2 border border-base-100 rounded-sm absolute btn-xs  hidden group-hover:block transition duration-300 ease-in-out`}
    >
      {children}
    </p>
  );
};

export default DetailsHover;
