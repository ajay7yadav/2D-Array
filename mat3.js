// Wave Travers

let mat =  [[2, 3, 4, 1],
            [3, 1, 5, 2],
            [3, 3, 3, 1],
            [1, 2, 3, 4]];

let c = mat.length;
let r = mat[0] .length;

function waveTravers(mat,r,c){
    for(let col=0; col<c; col++){
        // up to down direction
        if(col % 2 == 0){
            for(let row=0; row<r; row++){
                console.log(mat[row][col]);
            }
        }
        // down to up direction
        else{
            for(let row=r-1; row>=0; row--){
                console.log(mat[row][col]);
            }
        }
    }
}
waveTravers(mat,r,c)