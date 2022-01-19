// 순열
// 3개 중 3개를 뽑아서 순열을 만들자 for 반복문

function forloop() {
  let result = [];
  let lookup = [1, 2, 3];

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      for (let k = 0; k < 3; k++) {
        if (i === j || j === k || k === i) continue;
        result.push([lookup[i], lookup[j], lookup[k]]);
      }
    }
  }
  return result;
}
console.log(forloop());
