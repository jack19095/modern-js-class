const bmi = (h, w) => {
    return w / (h*h)
}

let h = [1.7, 2, 1.6, 1.5]
let w = [60, 100, 60, 45]
let result = []

h.forEach(function(element, index) {
    let hi = element
    let wi = w[index]
    result.push(bmi(hi, wi))
});
// >> hi
console.log(result)