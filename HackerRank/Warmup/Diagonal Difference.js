// https://www.hackerrank.com/challenges/diagonal-difference/problem?isFullScreen=true

function diagonalDifference(arr) {
  let leftDiagonal = 0;
  let rightDiagonal = 0;

  for (let i = 0; i < arr.length; i++) {
    leftDiagonal += arr[i][i];
    rightDiagonal += arr[i][arr.length - 1 - i];
  }
  return Math.abs(leftDiagonal - rightDiagonal);
}
// Math.abs() 절대값을 반환
// 행렬을 2차원 배열로 표현
// 왼쪽밑으로 가는 대각선 원소들은 행과열의 인덱스가 같고,
// 오른쪽 아래로 가는 행과 열의 인덱스가 받대를 표현