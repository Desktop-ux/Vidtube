import React, { useState } from "react";
import "./Readmore.css";

const ReadMore = ({ text, maxLength = 150 }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  if (!text) return null;

  const shouldTruncate = text.length > maxLength;
  const displayText = isExpanded
    ? text
    : text.slice(0, maxLength) + (shouldTruncate ? "..." : "");

  return (
    <p style={{ lineHeight: "1.5" }}>
      {displayText}
      {shouldTruncate && (
        <span
          onClick={() => setIsExpanded(!isExpanded)}
          style={{
            color: "#3ea6ff",
            cursor: "pointer",
            marginLeft: "6px",
            fontWeight: 500
          }}
        >
          {isExpanded ? "Show less" : "Read more"}
        </span>
      )}
    </p>
  );
};

export default ReadMore;
