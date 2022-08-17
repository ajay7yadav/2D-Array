// Spiral way print

let mat =  [[2, 3, 4, 1],
            [3, 1, 5, 2],
            [3, 3, 3, 1],
            [1, 2, 3, 4]];
//c = mat.length
function spiralTravers(mat){
    let c = mat[0].length;
    let r = mat.length;
    let minR = 0;
    let minC = 0;
    let count = 1
    while(count){
        // down
        for(let i=0,j=minR; i<r; i++){
            console.log(mat[i][j])
        }
        // right
        for(let i=r-1,j=minC; j<c; j++){
            console.log(mat[i][j]);
        }
        // up
        for(let i=r-1,j=c-1; i>= 0; i--){
            console.log(mat[i][j]);
        }
        // left
        for(let i=0; i>=0; i--){
            
        }
        count--
    }
}
spiralTravers(mat);