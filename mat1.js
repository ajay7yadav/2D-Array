// Add 2 Matrixs

let mat1 = [[2, 3, 4, 1],
            [3, 1, 5, 2],
            [2, 2, 2, 2],
            [1, 1, 1, 1]];

let mat2 = [[2, 3, 4, 1],
            [3, 1, 5, 2],
            [3, 3, 3, 1],
            [1, 2, 3, 4]];

let res = [[],[],[],[]]

for(let i=0; i<mat1.length; i++){
    for(let j=0; j<mat1[i].length; j++){

        res[i][j] = mat1[i][j] + mat2[i][j]
    }
}

console.table(res)