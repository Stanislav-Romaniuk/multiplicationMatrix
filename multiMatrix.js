const a = [
  [1,1,5],
  [3,5,6],
  [4,1,1],
];

const b = [
  [4,1,5],
  [3,5,6],
  [4,1,1],
];

function Multiplication(a, b) {
    if (a[0].length != b.length){
        console.log("Помилка умови")
    }
    
    
    let result = [];
    

    for (let i = 0; i < a.length; i++) {
        result[i] = [];
        for (let j = 0; j < b[0].length; j++) {
            let sum = 0;
            for (let k = 0; k < a[0].length; k++) {
                sum += a[i][k] * b[k][j];
            }
            result[i][j] = sum; 
        }
    }

    return result;
}

const result = Multiplication(a, b);
console.log(result);

