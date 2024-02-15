const os = require('os');  //these are built in so no path. It has many methods and properties

// info about current user
const user =os.userInfo();
console.log(user)

// method to return system uptime in seconds
const upTimeOfSystem = os.uptime();
console.log(`The System Uptime is ${upTimeOfSystem}`)