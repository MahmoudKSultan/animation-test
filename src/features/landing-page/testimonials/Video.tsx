import { Play } from "lucide-react";
import React, { useEffect, useRef } from "react";

function Video({ item }: { item: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [isPlaying, setIsPlaying] = React.useState(false);
  function handleVideoClick() {
    if (!isLoaded) {
      setIsLoaded(true);
    }
    videoRef.current?.play();
    setIsPlaying((prev) => !prev);
  }

  useEffect(() => {
    if (isPlaying) videoRef.current?.play();
    else videoRef.current?.pause();
  }, [isPlaying]);

  return (
    <div className="relative cursor-pointer" onClick={handleVideoClick}>
      {/* overlay */}
      {!isPlaying && (
        <div className="absolute inset-0 bg-black/50 rounded-lg">
          {/* play / pause button */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black/50 w-12 h-12 rounded-full flex items-center justify-center">
            <Play className="h-5 w-5 text-white" />
          </div>
        </div>
      )}

      <video
        className="h-[25rem] w-[18rem] object-cover rounded-lg"
        ref={videoRef}
        poster={`/assets/vids/testimonials/${item}.png`}
      >
        {isLoaded && (
          <source
            src={`/assets/vids/testimonials/${item}.mp4`}
            type="video/mp4"
          ></source>
        )}

        {/* <img src={`/assets/vids/testimonials/${item}.png`} /> */}
      </video>
    </div>
  );
}

export default Video;
