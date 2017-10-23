const bmi = (h, w) => {
    return w / (h*h)
}

let h = 1.7
let w = 60

let result = bmi(h, w)
console.log(result)