import React from "react";
import { BsFillPlayFill, BsPauseFill, BsPlayFill } from "react-icons/bs";
// import "./video.css";
import { useState } from "react";
import vid from "../img/promo.mp4"

function Video() {
  const [playvideo, setPlayvideo] = useState(false);
  const videRef = React.useRef();

  console.log(videRef.current.clientHeight/2);

  const handleVid = () => {
    setPlayvideo((prevplayvideo) => !prevplayvideo);

    const videoElement = videRef.current;

    if (videoElement) {
      if (playvideo) {
        videoElement.pause();
      } else {
        videoElement.play();
      }
    }
  };
  return (
    <div className="  ring-[1px] ring-slate-100 ">
      <div className="app__video  relative container mx-auto  ">
        <video
        className=" object-cover  container w-full  "
          src={vid}
          type="video/mp4"
          loop
          autoPlay
          ref={videRef}
          controls={false}
        />
        <div className="app__video-overlay  items-center flex__center">
          <div
            className="app__video-overlay_circle    absolute  top-[40%]   right-[40%] bg-transparent ring-1 ring-slate-400  p-10 rounded-full  flex__center"
            onClick={handleVid}
          >
            {playvideo ? (
              <BsPauseFill color="#fff" fontSize={30} />
            ) : (
              <BsPlayFill color="#fff" fontSize={30} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Video;
