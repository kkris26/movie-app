import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { handleNextPage, handlePrevPage } from "./handlePaginationButton";

const PaginationButton = ({ page, totalPage, setPage, sectionRef }) => {
  const scroolTo = () => {
    sectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="flex mt-10 justify-center w-full">
      <div className="join">
        <button
          className="join-item btn"
          onClick={() => {
            handlePrevPage({ page, setPage }), scroolTo();
          }}
        >
          <FiChevronLeft className="text-lg" />
        </button>
        <button className="join-item btn">
          Page {page} of {totalPage}
        </button>
        <button
          className="join-item btn"
          onClick={() => {
            handleNextPage({ page, totalPage, setPage }), scroolTo();
          }}
        >
          <FiChevronRight className="text-lg" />
        </button>
      </div>
    </div>
  );
};

export default PaginationButton;
