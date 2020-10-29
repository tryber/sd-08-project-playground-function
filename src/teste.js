let x = [1, 4, 8, 9, 84, 17, 20];

let maior = x.sort(function(a,b){
    return a - b;
})
let p = Math.max.apply(null, x)
console.log(p)