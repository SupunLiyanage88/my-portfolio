import { useState } from "react";
import "./LogoWall.css";

function LogoWall({
  items = [],
  direction = "horizontal",
  pauseOnHover = false,
  size = "clamp(8rem, 1rem + 30vmin, 25rem)",
  duration = "60s",
  textColor = "#ffffff",
  bgColor = "#060606",
  bgAccentColor = "#111111"
}) {
  const [isPaused, setIsPaused] = useState(false);

  const wrapperClass = [
    "wrapper",
    direction === "vertical" && "wrapper--vertical"
  ]
    .filter(Boolean)
    .join(" ");

  const marqueeClass = [
    "marquee",
    direction === "vertical" && "marquee--vertical",
    isPaused && "paused"
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <article
      className={wrapperClass}
      style={{
        "--size": size,
        "--duration": duration,
        "--color-text": textColor,
        "--color-bg": bgColor,
        "--color-bg-accent": bgAccentColor
      }}
    >
      {/* First Marquee */}
      <div
        className={marqueeClass}
        onMouseEnter={() => pauseOnHover && setIsPaused(true)}
        onMouseLeave={() => pauseOnHover && setIsPaused(false)}
      >
        <div className="marquee__group">
        {items.map((item, idx) => {
  const IconComponent = item.imgUrl;
  return <IconComponent key={idx} size={size} color={item.color} />;
})}
        </div>
        <div className="marquee__group" aria-hidden="true">
        {items.map((item, idx) => {
  const IconComponent = item.imgUrl;
  return <IconComponent key={idx} size={size} color={item.color} />;
})}
        </div>
      </div>

      {/* Second Marquee (reverse) */}
      <div
        className={`${marqueeClass} marquee--reverse`}
        onMouseEnter={() => pauseOnHover && setIsPaused(true)}
        onMouseLeave={() => pauseOnHover && setIsPaused(false)}
      >
        <div className="marquee__group">
        {items.map((item, idx) => {
  const IconComponent = item.imgUrl;
  return <IconComponent key={idx} size={size} color={item.color} />;
})}
        </div>
        <div className="marquee__group" aria-hidden="true">
        {items.map((item, idx) => {
  const IconComponent = item.imgUrl;
  return <IconComponent key={idx} size={size} color={item.color} />;
})}
        </div>
      </div>
    </article>
  );
}

export default LogoWall;