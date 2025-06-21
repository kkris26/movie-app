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
  text,
  resultData = "results",
}) => {
  try {
    const localData = localStorage.getItem(key);
    if (localData) {
      setter(JSON.parse(localData));
      return;
    }
    const response = await fetch(apiUrl, options);
    const data = await response.json();
    console.log(data);
    const results = !resultData ? data : data[resultData];
    setter(results);
    localStorage.setItem(key, JSON.stringify(results));
    console.log(text);
  } catch (err) {
    console.log(err);
  } finally {
    setTimeout(() => {
      setterLoading((prev) => ({ ...prev, [key]: false }));
      console.log("finish");
    }, 500);
  }
};

export const getAPIData2 = async ({
  key,
  apiUrl,
  setter,
  resultData,
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
    const results = resultData ? data[resultData] : data;
    setter(results);
    localStorage.setItem(key, JSON.stringify(results));
    console.log(text);
  } catch (err) {
    console.log(err);
  }
};
