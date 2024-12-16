import React, { memo } from "react";

const Content = ({handleIncrease}) => {
  console.log("re-render func con");
  return (
    <div>
      <button onClick={handleIncrease}>click here</button>
    </div>
  );
};

export default memo(Content);
