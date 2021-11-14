function most_frequent_element(arr) {
    let count = 0, element;
    for (let i = 0; i < arr.length; i++) {
        let cur_cnt = 0;
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] == arr[j]) {
                cur_cnt++;
            }
        }
        if (cur_cnt > count) {
            element = arr[i];
        }
    }
    return element;
}

let arr = [1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,2,3,4,5,4,5,6,7,8,9,8,7,8,7,8,7,6,7];
let element = most_frequent_element(arr);
console.log(element);