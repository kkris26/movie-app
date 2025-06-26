const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${import.meta.env.VITE_ACCESS_TOKEN}`,
  },
};
export const getAPIData = async ({
  key,
  apiUrl,
  setter,
  setterLoading,
  resultData = "results",
  type = "",
  setTotalPage,
}) => {
  try {
    const localData = localStorage.getItem(key);
    if (localData) {
      setter(JSON.parse(localData));
      return;
    }
    const response = await fetch(apiUrl, options);
    const data = await response.json();
    setTotalPage && setTotalPage(data.total_pages);
    const results = !resultData ? data : data[resultData];
    setter(results);
    type !== "search" && localStorage.setItem(key, JSON.stringify(results));
  } catch (err) {
    console.log(err);
  } finally {
    setterLoading((prev) => ({ ...prev, [key]: false }));
  }
};
