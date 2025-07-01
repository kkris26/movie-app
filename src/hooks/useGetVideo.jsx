import { useEffect, useState } from "react";
import useAPIService from "../services/getAPIService";

const useGetVideo = (id, setLoading) => {
  const { getAPIData } = useAPIService();
  const [video, setVideo] = useState([]);
  useEffect(() => {
    getAPIData({
      key: "videoKey" + id,
      path: `movie/${id}/videos`,
      setter: setVideo,
      setterLoading: setLoading,
    });
  }, []);
  return { video };
};

export default useGetVideo;
