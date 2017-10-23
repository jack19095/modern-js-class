const bmi = (h, w) => {
    let result = []
    for (let i = 0; i < h.length; i++) {
        result.push(w[i] / (h[i] * h[i]))
    }
    return result
}

let h = [1.7, 2, 1.6, 1.5]
let w = [60, 100, 60, 45]

console.log(bmi(h, w))