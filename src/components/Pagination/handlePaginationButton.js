export const handleNextPage = ({ page, totalPage, setPage }) => {
  if (page === totalPage) {
    return;
  }
  setPage((prev) => prev + 1);
};
export const handlePrevPage = ({ page, setPage }) => {
  if (page === 1) {
    return;
  }
  setPage((prev) => prev - 1);
};
