const prompt = require("prompt-sync")() // sử dụng require để nhập thư viện prompt-sync
const name = prompt(" your name ?? --") // hàm prompt vừa khởi tạo để yêu cầu và lưu lại yêu cầu vào variables 
console.log("hello ", name , " welcome to game ?") // in ra tên 

const shouldWeplay = prompt('DO you want to play ?? --')

if(shouldWeplay.toLowerCase() === "ok"){
    // console.log("ok we play")
    const leftOrRight = prompt("You enter a maze, do you want to left or right? --")
    
    if(leftOrRight === "left"){
        console.log("You go left and see a bridge")

        const cross = prompt("do you want cross the bridge?? --")
        if(cross === "yes" || cross === "y" || cross === "ok"){
            console.log("you cross but the bridge was weak and broke and you fell. You lost... ")
        }else{
            console.log("you win")
        }

    }else{
        console.log("you go right and fall of a cliff...")
    }

} else if (shouldWeplay.toLowerCase() === "no") {
    console.log("ok")
} else { 
    console.log("invalid input...")
}