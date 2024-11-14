import { useEffect, useState } from "react";

const Timer = () => {
  const [count, setCount] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => prev + 1);

      console.log("run laj")
    }, 1000);

    return () =>{
        clearInterval(interval)
    }
  }, []);
  return <div>{count}</div>;
};

export default Timer;
