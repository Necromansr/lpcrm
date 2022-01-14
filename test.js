let sum = (a, b, c) => a + b + c;
let wrap = (a) => {
    let temp = [a];
    function f(b) {
        console.log(temp.length, b);
        if (b === undefined) {
            return f;
        } else if (temp.length < 4) {
            temp.push(b);
            return f;
        } else {
            console.log('f');
            return sum(...temp);
        }

    }
    return f;
}

let w = (f) => {
    let args = [];
 
    let ff = (...argumets) => {
        args.push(...argumets);
        if (args.length == 3)
            return f(...args);
        return ff;
    }
    return ff;
}
let mf = w(sum);
console.log(mf(1, 2, 3));
mf = w(sum);
console.log(mf(1)()()(2)()()(3));

