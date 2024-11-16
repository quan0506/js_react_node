// import Count from "./components/Count";

// import { useState } from "react";
// import Content from "./components/Content";

// import { useRef, useState } from "react";

// function App() {
//   const [count, setCount] = useState(0);

//   const timerId = useRef();

//   const handleStart = () => {
//     timerId.current = setInterval(() => {
//       setCount((prev) => prev + 1);
//     }, 1000);

//     console.log("start", timerId.current);
//   };

//   const handleStop = () => {
//     clearInterval(timerId.current);

//     console.log("stop", timerId.current);
//   };

//   return (
//     <div>
//       <h2>{count}</h2>
//       <div>
//         <button onClick={handleStart}>Start</button>
//         <button onClick={handleStop}>Stop</button>
//       </div>
//     </div>
//   );
// }

// export default App;

// function App() {
//   const [count, setCount] = useState(1);
//   const [count2, setCount2] = useState(1);

//   const handleIncrease = () => {
//     setCount(count + 1);
//   };

//   const handleIncrease2 = () => {
//     setCount2(count2 + 1);
//   };

//   console.log("re-render func cha");

//   return (
//     <div>
//       <div>{count}</div>
//       <button onClick={handleIncrease}>Click me</button>
//       <button onClick={handleIncrease2}>Click me 2</button>

//       <Content count={count}/>
//     </div>
//   );
// }

// export default App;

