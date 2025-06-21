const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${import.meta.env.VITE_ACCESS_TOKEN}`,
  },
};
export const getMovieService = async ({
  key,
  apiUrl,
  setter,
  setterLoading,
  text,
}) => {
  try {
    const localData = localStorage.getItem(key);
    if (localData) {
      setter(JSON.parse(localData));
      return;
    }
    const response = await fetch(apiUrl, options);
    const data = await response.json();
    setter(data.results);
    localStorage.setItem(key, JSON.stringify(data.results));
    console.log(text);
  } catch (err) {
    console.log(err);
  } finally {
    setTimeout(() => {
      setterLoading((prev) => ({ ...prev, [key]: false }));
      console.log("finish");
    }, 1000);
  }
};

export const getAPIData = async ({ key, apiUrl, setter, resultData, text }) => {
  try {
    const localData = localStorage.getItem(key);
    if (localData) {
      setter(JSON.parse(localData));
      return;
    }
    const response = await fetch(apiUrl, options);
    const data = await response.json();
    const results = resultData ? data[resultData] : data;
    setter(results);
    localStorage.setItem(key, JSON.stringify(results));
    console.log(text);
  } catch (err) {
    console.log(err);
  }
};
