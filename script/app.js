const arr = []

for (let index = 0; index < Infinity; index++) {
    let str = prompt("Назовите команду")
    str = str.split (", ")
    
    if (str[0] == 'add') {
       arr.push(str[1])
    } else if (str[0] === 'stop') {
        break;
    } else if (str[0] === 'del') {
        let i = arr.indexOf(str[1])
       arr.splice(i, 1)
    }
    console.log(arr);
}

console.log(arr);