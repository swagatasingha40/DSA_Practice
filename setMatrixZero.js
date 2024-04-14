//Set Matrix Zero
//Problem Statement: Given a matrix if an element in the matrix is 0 then you will have to set its entire column and row to 0 and then return the matrix.

// Examples 1:
// Input:
//  matrix=[[1,1,1],[1,0,1],[1,1,1]]

// Output:
//  [[1,0,1],[0,0,0],[1,0,1]]

function printMatrix() {
  const finalArr = [];
  for (i = 0; i < matrix.length; i++) {
    tempArr = [];
    for (j = 0; j < matrix[i].length; j++) {
      tempArr.push(matrix[i][j]);
    }
    finalArr.push(tempArr);
  }
  return finalArr;
}

//brute force approach start

function setRow(matrix, n, m, i) {
  for (k = 0; k < m; k++) {
    if (matrix[i][k] !== 0) matrix[i][k] = -1;
  }
}

function setCol(matrix, n, m, j) {
  for (k = 0; k < n; k++) {
    if (matrix[k][j] !== 0) matrix[k][j] = -1;
  }
}

function bruteForceApproach(matrix, n, m) {
  for (i = 0; i < n; i++) {
    for (j = 0; j < m; j++) {
      if (matrix[i][j] === 0) {
        setRow(matrix, n, m, i);
        setCol(matrix, n, m, j);
      }
    }
  }

  //mark all -1 as 0
  for (i = 0; i < n; i++) {
    for (j = 0; j < m; j++) {
      if (matrix[i][j] === -1) {
        matrix[i][j] = 0;
      }
    }
  }
}

//time complexity : (n * m) * (n + m) + (n * m) ~ O(n^3)
//space complexity : O(1)

//brute force approach end

const matrix = [
  [0, 1, 2, 0],
  [3, 4, 5, 2],
  [1, 3, 1, 5],
];

const n = matrix.length;
const m = matrix[0].length;
const zeroMatrix = bruteForceApproach(matrix, n, m);
const finalMatrix = printMatrix(zeroMatrix);
console.log(finalMatrix);
