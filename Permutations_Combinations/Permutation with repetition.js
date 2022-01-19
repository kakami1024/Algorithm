// 중복 순열
// 3개 중 3개를 뽑아서 중복 순열을 만들자 for 반복문

// function forloop() {
//   let result = [];
//   let lookup = [1, 2, 3];

//   for (let i = 0; i < 3; i++) {
//     let pick1 = lookup[i];
//     for (let j = 0; j < 3; j++) {
//       let pick2 = lookup[j];
//       for (let k = 0; k < 3; k++) {
//         let pick3 = lookup[k];
//         result.push([pick1, pick2, pick3]);
//       }
//     }
//   }
//   return result;
// }
// console.log(forloop());

// function forloop() {
//   let result = [];
//   let lookup = [1, 2, 3];

//   for (let i = 0; i < 3; i++) {
//     for (let j = 0; j < 3; j++) {
//       for (let k = 0; k < 3; k++) {
//         result.push([lookup[i], lookup[j], lookup[k]]);
//       }
//     }
//   }
//   return result;
// }
// console.log(forloop());

// 재귀

let result = [];
const lookup = [1, 2, 3];

function recursion(count, bucket) {
  if (count === 0) {
    result.push(bucket);
    return;
  }
  for (let i = 0; i < 3; i++) {
    const pick = lookup[i];

    recursion(count - 1, bucket.concat(pick));
  }
}
console.log(recursion(3, []));
