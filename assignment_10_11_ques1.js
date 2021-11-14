// Create array from x to y
function generate_array(x, y) {
    let arr = [];
    for (let i = x; i<=y; i++){
        arr.push(i);
    }
    return arr;
}

let arr = generate_array(2, 4);
console.log(arr);