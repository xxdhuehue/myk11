import React from "react";

 const SlideSingleContainer = ({ children, slidescount, width }) => {
    
  return (
    <div
      style={{
        height: `100%`,
        width,
      }}
    >
      {
        React.cloneElement(children, {slidescount})
      }
    </div>
  );
};
export default SlideSingleContainer;