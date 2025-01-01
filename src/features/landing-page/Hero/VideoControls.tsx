import React, { useState, forwardRef } from "react";
import { Pause, Play, VolumeOff, Volume2 } from "lucide-react";

// Use forwardRef to forward the ref from the parent
interface VideoControlsProps {
  videoRef: React.RefObject<HTMLVideoElement | null>; // Allow videoRef to be null initially
}

export const VideoControls = forwardRef<HTMLVideoElement, VideoControlsProps>(
  ({ videoRef }) => {
    const [isPlaying, setIsPlaying] = useState(true);
    const [isMuted, setIsMuted] = useState(true);

    const handlePlayPause = () => {
      if (videoRef.current) {
        const videoElement = videoRef.current;
        if (videoElement.paused) {
          videoElement.play();
          setIsPlaying(true); // Update state to "playing"
        } else {
          videoElement.pause();
          setIsPlaying(false); // Update state to "paused"
        }
      }
    };

    const handleMuteUnmute = () => {
      if (videoRef.current) {
        const videoElement = videoRef.current;
        videoElement.muted = !videoElement.muted;
        setIsMuted(videoElement.muted); // Update mute state
      }
    };

    return (
      <div className="flex items-center gap-4 absolute bottom-[45%] sm:bottom-[40%] md:bottom-8 right-8 text-white">
        {/* Play/Pause Button */}
        <div
          className="cursor-pointer"
          onClick={handlePlayPause}
          aria-label={isPlaying ? "Pause" : "Play"}
        >
          {isPlaying ? (
            <Pause className="w-6 h-6" />
          ) : (
            <Play className="w-6 h-6" />
          )}
        </div>
        {/* Mute/Unmute Button */}
        <div
          className="cursor-pointer"
          onClick={handleMuteUnmute}
          aria-label={isMuted ? "Unmute" : "Mute"}
        >
          {isMuted ? (
            <VolumeOff className="w-6 h-6" />
          ) : (
            <Volume2 className="w-6 h-6" />
          )}
        </div>
      </div>
    );
  }
);

// Set a displayName for debugging purposes
VideoControls.displayName = "VideoControls";

export default VideoControls;
