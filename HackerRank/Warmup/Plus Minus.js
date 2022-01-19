// https://www.hackerrank.com/challenges/plus-minus/problem?isFullScreen=true

function plusMinus(arr) {
  let positive = 0;
  let negative = 0;
  let zero = 0;

  for(let i = 0; i < arr.length; i++){
    if(arr[i] > 0){
      positive++;
    }else if(arr[i] < 0){
      negative++;
    }else{
      zero++;
    }
  }
  positive = positive / arr.length;
  negative = negative / arr.length;
  zero = zero / arr.length;
  
  console.log(positive.toFixed(6));
  console.log(negative.toFixed(6));
  console.log(zero.toFixed(6));
}
let arr = [-4, 3, -9, 0, 4, 1];
plusMinus(arr)