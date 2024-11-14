const Hello = (props) => {
//   console.log(props);
// const {name, age} = props

console.log(props)

  return (
    <div>
        UserName: {props.getUserName()} 
    </div>
  );
};

export default Hello;
