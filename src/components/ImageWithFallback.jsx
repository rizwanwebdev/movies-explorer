import React, { useState } from "react";

const ERROR_IMG_SRC =
  "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4OCIgaGVpZ2h0PSI4OCIgc3Ryb2tlPSIjZTVlNWU1IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4=";

export default function ImageWithFallback({ poster, alt, className }) {
  const [didError, setDidError] = useState(false);

  const handleError = () => {
    setDidError(true);
  };

  return didError ? (
    <div
      className={`flex items-center justify-center aspect-2/3 ${
        className ? className : ""
      } `}
    >
      <img
        className="bg-center bg-cover w-full"
        src={ERROR_IMG_SRC}
        alt="Error loading image"
        data-original-url={poster}
      />
    </div>
  ) : (
    <img src={poster} alt={alt} onError={handleError} />
  );
}
