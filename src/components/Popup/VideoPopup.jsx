import {
  IoIosClose,
  IoMdClose,
  IoMdHeart,
  IoMdHeartEmpty,
} from "react-icons/io";

const VideoPopup = ({ videoUrl, videoRef, setVideoUrl }) => {
  videoRef.current?.addEventListener("close", () => setVideoUrl(""));
  return (
    <dialog ref={videoRef} id="my_modal_11" className="modal px-4 md:px-0 ">
      <div className="modal-box p-2 md:p-3 w-full  overflow-visible">
        <button
          onClick={() => {
            videoRef.current.close(), setVideoUrl("");
          }}
          className=" cursor-pointer p-1  btn-circle -right-1 -top-1 absolute bg-error text-white"
        >
          <IoMdClose className="text-xs" />
        </button>
        {videoUrl ? (
          <iframe
            className="aspect-video w-full rounded"
            src={videoUrl}
            title="YouTube video player"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
        ) : (
          <div className="skeleton aspect-video"></div>
        )}
      </div>
      <form method="dialog" className="modal-backdrop">
        <button onClick={() => setVideoUrl("")}>close</button>
      </form>
    </dialog>
  );
};

export default VideoPopup;
