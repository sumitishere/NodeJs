// GLOBALS - NO WINDOW!!!

// __durname - path to current directory
// __filename - file name
// require - function to use modules(Common JS)
// module - info about current module(file)
// process - info about env where the program is being executed

console.log(__dirname)
console.log(__filename)

//after every second
// setInterval(()=>{
//     console.log("Hello, World!!");
// },1000)

//after 1 second then end
setTimeout(() => {
    console.log("Hello, World!!");
}, 1000)