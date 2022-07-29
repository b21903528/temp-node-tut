const path = require ('path');


//return platform specific separator i.e "/"
console.log(path.sep)

const pathfile = path.join('/content/','subfolder','test.txt')
console.log(pathfile)

const base = path.basename(pathfile)
console.log(base)

//returns an absolute path
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'rest.txt')
console.log(absolute)