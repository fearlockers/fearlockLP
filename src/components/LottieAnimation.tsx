"use client";

import { DotLottiePlayer } from "@dotlottie/react-player";

interface LottieAnimationProps {
  src: string;
  className?: string;
  loop?: boolean;
  autoplay?: boolean;
  speed?: number;
}

export default function LottieAnimation({
  src,
  className = "",
  loop = true,
  autoplay = true,
  speed = 1,
}: LottieAnimationProps) {
  return (
    <DotLottiePlayer
      src={src}
      autoplay={autoplay}
      loop={loop}
      speed={speed}
      className={className}
    />
  );
}
