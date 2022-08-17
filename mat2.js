// Product(Multiplication) of 2 Matrix

function simpleMatrix(){
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

            res[i][j] = mat1[i][j] * mat2[i][j]
        }
    }

    console.table(res)
}
//simpleMatrix();

// 2 * 4 matrix

function advanceMat(){
    let mat1 = [[3, 1, 5, 2],
                [2, 2, 2, 2]];

    let mat2 = [[2, 3, 4, 1],
                [3, 1, 5, 2],
                [3, 3, 3, 1],
                [1, 2, 3, 4]];
    
    let c = mat1.length;
    let r = mat1[0].length;
    let prod = new Array(new Array(r).fill(0),new Array(r).fill(0));
    console.table(prod)
    for(let row=0; row<prod.length; row++){
        for(let col=0; col<prod[0].length; col++){

            for(let i=0; i<r; i++){
                //console.log(mat1[row][i] ," * ", mat2[i][col]);
                prod[row][col] += mat1[row][i] * mat2[i][col];
            }
        }
    }
    console.table(prod)
}

advanceMat()