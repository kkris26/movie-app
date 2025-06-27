import { useState } from "react";

const errorHandler = () => {
  const [error, setError] = useState("");
  console.log(error);
  return { setError };
};

export default errorHandler;
