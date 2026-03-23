"use client";

import { getYouTubeVideoId, getVimeoVideoId } from "./video-utils";

interface VideoPlayerProps {
  src: string | null | undefined;
  className: string;
  fallbackUrl?: string;
  autoPlay?: boolean;
  muted?: boolean;
  loop?: boolean;
  playsInline?: boolean;
}

const DEFAULT_VIDEO =
  "https://res.cloudinary.com/dmr4fxsg4/video/upload/f_auto,q_auto/openart-video_bf876030_1773220365957_eo69rr.mp4";

export function VideoPlayer({
  src,
  className,
  fallbackUrl = DEFAULT_VIDEO,
  autoPlay = true,
  muted = true,
  loop = true,
  playsInline = true,
}: VideoPlayerProps) {
  // Fallback to default if no URL provided
  const videoSrc = src || fallbackUrl;
  const youtubeId = getYouTubeVideoId(videoSrc);
  const vimeoId = getVimeoVideoId(videoSrc);

  // YouTube
  if (youtubeId) {
    return (
      <iframe
        className={className}
        src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&mute=1&controls=0&modestbranding=1`}
        allow="autoplay; muted"
        allowFullScreen
        frameBorder="0"
        style={{ border: "none" }}
      />
    );
  }

  // Vimeo
  if (vimeoId) {
    return (
      <iframe
        className={className}
        src={`https://player.vimeo.com/video/${vimeoId}?autoplay=1&muted=1`}
        allow="autoplay; muted"
        allowFullScreen
        frameBorder="0"
        style={{ border: "none" }}
      />
    );
  }

  // Direct video file (MP4, WebM, etc.)
  return (
    <video
      autoPlay={autoPlay}
      muted={muted}
      loop={loop}
      playsInline={playsInline}
      preload="auto"
      className={className}
    >
      <source src={videoSrc} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}
