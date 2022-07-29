const os = require('os')

// info about current user
const userInfo = os.userInfo()
console.log(userInfo)

const OSdetails = {
    name: os.type(),
    release: os.release(),
    totalMemory: os.totalmem(),
    freeMemory: os.freemem(),
}
 
console.log(OSdetails)
console.log(`The system uptime is ${os.uptime}`)