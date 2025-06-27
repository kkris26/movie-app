const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
  },
};
const GetData = async (req, res) => {
  const path = req.query.path;
  try {
    const response = await fetch(`${process.env.BASE_API}${path} `, options);
    const data = await response.json();
    if (data.status_code === 7) {
      const error = new Error(data.status_message);
      error.status_code = 401;
      throw error;
    }
    if (data.status_code === 6) {
      const error = new Error(data.status_message);
      error.status_code = 404;
      throw error;
    }
    if (data.status_code === 34) {
      const error = new Error(data.status_message);
      error.status_code = 404;
      throw error;
    }
    return res.status(200).json(data);
  } catch (err) {
    return res.status(err.status_code || 500).json({
      error: err.message || "Something went wrong",
    });
  }
};

export default GetData;
