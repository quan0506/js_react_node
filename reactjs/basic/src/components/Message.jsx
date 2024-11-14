const Message = () => {

    const handleClick = () =>{
        console.log("hi message")
    }

  return (
    <div>
      <button onClick={handleClick}>Click me</button>
    </div>
  )
}

export default Message
