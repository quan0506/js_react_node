import React, { memo } from "react";

const Content = ({count}) => {
  console.log("re-render func con");
  return <div>content herreee {count}</div>;
};

export default memo(Content);
