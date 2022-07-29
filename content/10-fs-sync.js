// interacting with a file system. Module is called fs
// we can do it asynchronously or synchronously 

// HERE WE DO IT SYNCHRONOUSLY so we addes sync to everything we did

//const {readFileSync} = require('fs'); // you can define it like this
const fs = require('fs');             // or you define it s explained in lines 5 & 6
//fs.readFileSync

// we also have writefilesync

const {readFileSync, writeFileSync} = require('fs');

const first = readFileSync('./content/first.txt', 'utf-8');
const second = readFileSync('./content/second.txt', 'utf-8');

console.log(first,second)

writeFileSync('./content/result-sync.txt', `Hi, this is the result : ${first} ,${second}`, {flag: 'a'} )