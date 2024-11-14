import { useEffect,useLayoutEffect, useState } from "react";

const Count = () => {
  const [count, setCount] = useState(1);

  useLayoutEffect(() =>{
    if(count >3){
        setCount(0);
    }
  },[count])

  const handleTang = () =>{
    setCount(count +1)
  }
  return (
    <div>
      <div>{count}</div>
      <button onClick={handleTang}>Add</button>
    </div>
  );
};

export default Count;
