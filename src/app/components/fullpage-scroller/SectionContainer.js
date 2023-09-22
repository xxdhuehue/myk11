import React from "react";

 const SectionContainer = ({ children, height = 100 }) => {
  return (
    <div
      style={{
        height: `${height}%`,
        width: "100%",
      }}
    >
      {children}
    </div>
  );
};
export default SectionContainer;