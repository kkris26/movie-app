import errorHandler from "../hooks/errorHandler";
export const getAPIData = async ({
  key,
  path,
  setter,
  setterLoading,
  resultData = "results",
  type = "",
  setTotalPage,
  setNotFound,
}) => {
  const encodePath = encodeURIComponent(path);
  // const { setError } = errorHandler();
  try {
    const localData = localStorage.getItem(key);
    if (localData) {
      setter(JSON.parse(localData));
      return;
    }

    const response = await fetch(`/api/movie?path=${encodePath}`);
    if (response.status == 401) {
      const errorMessage = await response.json();
      const error = new Error(errorMessage.error);
      error.status_code = response.status;
      throw error;
    }
    if (response.status == 500) {
      const error = new Error("Internal Server Error");
      error.status_code = response.status;
      throw error;
    }
    if (!response.ok) {
      const errorMessage = await response.json();
      const error = new Error(errorMessage.error);
      error.status_code = response.status;
      setNotFound && setNotFound(true);
      throw error;
    }
    const data = await response.json();
    setTotalPage && setTotalPage(data.total_pages);
    const results = !resultData ? data : data[resultData];
    setter(results);
    type !== "search" && localStorage.setItem(key, JSON.stringify(results));
  } catch (err) {
    console.log(err.status_code, err.message);
  } finally {
    setterLoading((prev) => ({ ...prev, [key]: false }));
  }
};
