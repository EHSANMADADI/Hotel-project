"use client";
import "vidstack/styles/defaults.css";
import "vidstack/styles/community-skin/video.css";

import {
  MediaCommunitySkin,
  MediaOutlet,
  MediaPlayer,
  MediaPoster,
} from "@vidstack/react";
import VideoImpl from "./types";

const Video = ({ poster, src }: VideoImpl) => {
  return (
    <>
      <div className="w-full aspect-video" dir="ltr">
        <MediaPlayer
          src={src}
          poster={poster}
          aspectRatio={16 / 9}
          crossorigin="">
          <MediaOutlet>
            <MediaPoster alt="video" />
          </MediaOutlet>
          <MediaCommunitySkin />
        </MediaPlayer>
      </div>
    </>
  );
};

export default Video;
