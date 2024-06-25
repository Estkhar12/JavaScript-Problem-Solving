function getFileExtention(filename){
    const extention = filename.split('.').pop();
    return extention;
}

const r1 = getFileExtention('module.js');
console.log(r1);

const r2 = getFileExtention('module.txt');
console.log(r2)