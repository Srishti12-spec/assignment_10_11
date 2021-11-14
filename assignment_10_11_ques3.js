// function to check if the number is prime or not
function check_is_prime(number) {
    let is_prime = true;
    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            is_prime = false;
        }
    }
    return is_prime;
}

let num = 10;
let is_prime = check_is_prime(num);
console.log(is_prime);