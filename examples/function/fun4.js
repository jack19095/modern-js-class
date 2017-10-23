const bmi = (h, w) => {
    return w / (h*h)
}

let h = [1.7, 2, 1.6, 1.5]
let w = [60, 100, 60, 45]

let result = h.map(function(element, index, array) {
    let hi = element
    let wi = w[index]
    return bmi(hi, wi)    
})

console.log(result)