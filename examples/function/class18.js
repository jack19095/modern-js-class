const bmi = (h, w) => {
  return w / (h * h)
}

let h = [1.7, 2, 1.6, 1.5]
let w = [60, 100, 60, 45]

for (let i = 0; i < h.length; i++) {
  let result = bmi(h[i], w[i])
  console.log(result)
}