import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { handleNextPage, handlePrevPage } from "./handlePaginationButton";

const PaginationButton = ({
  page,
  totalPage,
  setPage,
  sectionRef,
  loading,
}) => {
  const scroolTo = () => {
    sectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="flex mt-10 justify-center w-full">
      <div className="join">
        <button
          className="join-item btn z-1"
          onClick={() => {
            handlePrevPage({ page, setPage }), scroolTo();
          }}
        >
          <FiChevronLeft className="text-lg" />
        </button>
        <button className="join-item btn text-xs lg:text-sm">
          Page {loading ? "... " : page} of{" "}
          {loading || !totalPage ? "... " : totalPage}
        </button>
        <button
          className="join-item btn z-1"
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
