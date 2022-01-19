// 조합
// 3개 중 2개를 뽑아서 조합을 만들자 for 반복문

function forloop() {
  let result = [];
  let lookup = [1, 2, 3];

  for (let i = 0; i < 3; i++) {
    for (let j = 1 + i; j < 3; j++) {
      result.push([lookup[i], lookup[j]]);
    }
  }
  return result;
}
console.log(forloop());
