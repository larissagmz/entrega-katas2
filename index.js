function add(num1, num2) {
    return num1 + num2;
}

function multiply(num1, num2) {
    let produto = 0;
    for (let i = 0; i < num2; i++) {
        produto = add(produto, num1);
    }
    return produto;
}

console.log(multiply(2, 4));

function power(x, n) {
    let produto = 1;
    for (let i = 0; i < n; i++) {
        produto = multiply(produto, x);
    }
    return produto;
}

console.log(power(11, 2));

// function factorial(num1) {
//     let produto = 1;

//     if (num1 === 0) {
//         return 1;
//     }
//     for (let i = 1; i <= num1; i++) {
//         result = multiply(produto, i);
//     }
//     return produto;
// }

console.log(factorial(11));

function factorial(n) {
    if (n === 0) {
        return 1;
    }

    let result = 1;

    for (let i = 1; i <= n; i++) {
        result = multiply(result, i);
    }

    return result;
}

console.log(factorial(5));

function fibonacci(n) {
    let fibonacci = 0;
    let fibonacci2 = 1;
    let result = 0;
    for (let i = 0; i < n; i++) {
        fibonacci = add(result, fibonacci2);
        result = fibonacci2;
        fibonacci2 = fibonacci;
    }
    return result;
}

console.log(fibonacci(7));
