// interacting with a file system. Modeule is called fs
// we can do ot synchronously or Asynchronously ( blocking / non blocking)

// HERE WE DO IT ASYNCHRONOUSLY

const {readFile, writeFile} = require('fs')

readFile('./content/first.txt', (err,result)=>{
    if (err) {
        console.log(err)
        return
    }
    const first = result;
    readFile('./content/second.txt', 'utf-8', (err,result)=>{
        if (err) {
            console.log(err)
            return
        }
    const second = result;
    writeFile(
        './content/result-async.txt',
        `Here is the result from synchronous model : ${first}, ${second}`, (err, result) => {
            if (err){
                console.log(err)
                return
            }
            console.log('done with this task')
        }
    )
    })
})
console.log('starting next task')