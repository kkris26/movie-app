const ListLabel = ({ children }) => {
  return (
    <li className="bg-base-300 w-max py-[3px] lg:py-1 px-[5px] lg:px-2 rounded-xs md:rounded-sm lg:rounded-md text-[10px] lg:text-xs cursor-pointer hover:bg-base-200  transition-all 0.3s">
      {children}
    </li>
  );
};

export default ListLabel;
