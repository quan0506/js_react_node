// import Count from "./components/Count";

// import {
//   createContext,
//   useCallback,
//   useMemo,
//   useReducer,
//   useState,
// } from "react";
// import Content from "./components/Content";

// // import { useRef, useState } from "react";

// // function App() {
// //   const [count, setCount] = useState(0);

// //   const timerId = useRef();

// //   const handleStart = () => {
// //     timerId.current = setInterval(() => {
// //       setCount((prev) => prev + 1);
// //     }, 1000);

// //     console.log("start", timerId.current);
// //   };

// //   const handleStop = () => {
// //     clearInterval(timerId.current);

// //     console.log("stop", timerId.current);
// //   };

// //   return (
// //     <div>
// //       <h2>{count}</h2>
// //       <div>
// //         <button onClick={handleStart}>Start</button>
// //         <button onClick={handleStop}>Stop</button>
// //       </div>
// //     </div>
// //   );
// // }

// // export default App;

// // function App() {
// //   const [count, setCount] = useState(1);
// //   const [count2, setCount2] = useState(1);

// //   const handleIncrease = () => {
// //     setCount(count + 1);
// //   };

// //   const handleIncrease2 = () => {
// //     setCount2(count2 + 1);
// //   };

// //   console.log("re-render func cha");

// //   return (
// //     <div>
// //       <div>{count}</div>
// //       <button onClick={handleIncrease}>Click me</button>
// //       <button onClick={handleIncrease2}>Click me 2</button>

// //       <Content count={count} />
// //     </div>
// //   );
// // }

// // export default App;

// // function App() {
// //   const [count, setCount] = useState(1);

// //   // const handleIncrease = () => {
// //   //   setCount((prev) => prev + 1);
// //   // };

// //   const handleIncrease = useCallback(() => {
// //     setCount((prev) => prev + 1);
// //   }, []);

// //   console.log("re - render func cha");

// //   return (
// //     <div>
// //       <div>use callback</div>

// //       <div>{count}</div>

// //       {/* <button onClick={handleIncrease}>click here</button> */}
// //       <Content handleIncrease={handleIncrease} />
// //     </div>
// //   );
// // }

// // export default App;

// // function App() {
// //   const [courses, setCouses] = useState([]);
// //   const [name, setName] = useState("");
// //   const [price, setPrice] = useState("");

// //   console.log(price);

// //   const handleSubmit = () => {
// //     const course = {
// //       name,
// //       price: +price,
// //     };

// //     setCouses((prev) => [...prev, course]);
// //   };

// //   // const total = courses.reduce((cur, course) => {
// //   //   console.log("tinh lai");
// //   //   return cur + course.price;
// //   // }, 0);

// //   const total = useMemo(() =>{
// //     return courses.reduce((cur, course) => {
// //     console.log("tinh lai");
// //     return cur + course.price;
// //   }, 0);
// //   },[courses])

// //   return (
// //     <div>
// //       <div>
// //         <input
// //           type="text"
// //           placeholder="nhap khoa hoc"
// //           value={name}
// //           onChange={(e) => setName(e.target.value)}
// //         />
// //       </div>
// //       <div>
// //         <input
// //           type="text"
// //           placeholder="nhap gia khoa hoc"
// //           value={price}
// //           onChange={(e) => setPrice(e.target.value)}
// //         />
// //       </div>

// //       <button onClick={handleSubmit}>Add</button>

// //       <div>Total:{total}</div>

// //       <ul>
// //         {courses.map((courses, index) => {
// //           return (
// //             <li key={index}>
// //               ten khoa hoc : {courses.name}, gia :{courses.price}
// //             </li>
// //           );
// //         })}
// //       </ul>
// //     </div>
// //   );
// // }

// // export default App;

// // function App() {

// //   const initialState ={
// //     count:0,

// //   }

// //   const reducer = (state, action) =>{

// //     console.log(state)
// //     console.log(action);

// //     switch(action.type){
// //       case 'increase':
// //         return {
// //           count:state.count + 1,
// //         }
// //       case 'decrease' :
// //         return {
// //           count:state.count - 1,
// //         }
// //     }
// //   }

// //   const [state, dispatch] = useReducer(reducer, initialState);

// //   console.log(state)

// //   return (
// //     <div>
// //       <h3>count : {state.count}</h3>

// //       <div>
// //         <button onClick={() => dispatch({ type: "increase" })}>increase</button>
// //         <button onClick={() => dispatch({ type: "decrease" })}>decrease</button>
// //       </div>
// //     </div>
// //   );
// // }

// // export default App;

// import "./components/ListUser";
// import { ListUser } from "./components/ListUser";

// export const ThemeContext = createContext();

// function App() {
//   const [theme, setTheme] = useState("dark");

//   // console.log(ThemeContext);

//   return (
//     <ThemeContext.Provider value={{theme,setTheme}}>
//       <ListUser />
//     </ThemeContext.Provider>
//   );
// }

// export default App;


