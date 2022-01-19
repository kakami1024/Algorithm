## 문제
김코딩과 박해커는 사무실 이사를 위해 짐을 미리 싸 둔 뒤, 짐을 넣을 박스를 사왔다. 
박스를 사오고 보니 각 이사짐의 무게는 들쭉날쭉한 반면, 박스는 너무 작아서 한번에 
최대 2개의 짐 밖에 넣을 수 없었고 무게 제한도 있었다.
<br/>

예를 들어, 짐의 무게가 [70kg, 50kg, 80kg, 50kg]이고 박스의 무게 제한이 100kg이라면 
2번째 짐과 4번째 짐은 같이 넣을 수 있지만 1번째 짐과 3번째 짐의 무게의 합은 150kg이므로 
박스의 무게 제한을 초과하여 같이 넣을 수 없다.
<br/>

박스를 최대한 적게 사용하여 모든 짐을 옮기려고 합니다.
짐의 무게를 담은 배열 stuff와 박스의 무게 제한 limit가 매개변수로 주어질 때, 
모든 짐을 옮기기 위해 필요한 박스 개수의 최소값을 return 하도록 movingStuff 함수를 작성하세요.
<br/>

## 입력
인자 1: stuff
Number 타입의 40 이상 240 이하의 자연수를 담은 배열
ex) [70, 50, 80, 50]
인자 2: limited
Number 타입의 40 이상 240 이하의 자연수
## 출력
Number 타입을 리턴해야 합니다.
모든 짐을 옮기기 위해 필요한 박스 개수의 최솟값을 숫자로 반환합니다.
## 주의사항
옮겨야 할 짐의 개수는 1개 이상 50,000개 이하입니다.
박스의 무게 제한은 항상 짐의 무게 중 최대값보다 크게 주어지므로 짐을 나르지 못하는 경우는 없습니다.
## 입출력 예시
let output = movingStuff([70, 50, 80, 50], 100);
console.log(output); 3

let output = movingStuff([60, 80, 120, 90, 130], 140);
console.log(output); 4

```javascript
function movingStuff(stuff, limit) {
  let count = 0;

  stuff.sort((a, b) => b - a);

  while (stuff.length > 0) {
    if (stuff[0] + stuff[stuff.length - 1] > limit) {
      stuff.shift();
      count++;
    } else {
      stuff.shift();
      stuff.pop();
      count++;
    }
  }
  return count;
}
```
```javascript
function movingStuff(stuff, limit) {
  // 1. 50 + 50
  // 2. 70 + 80 은 limit=100 보다 크니까 70만 담는다.
  // 3. 다음 80만 담는다.

  // 박스의 갯수를 셀 변수
  let count = 0;
  // 짐의 무게를 오름차순으로 정렬
  stuff = stuff.sort((a, b) => a - b); // [50,50,70,80]

  while (stuff.length > 0) {
    // 가장 작은 무게와 큰 무게를 더해서 limit보다 작거나 같으면 담는다.
    if (stuff[0] + stuff[stuff.length - 1] <= limit) {
      stuff.shift();
    }
    // 아니면 무거운것만 담는다
    stuff.pop();
    count++;
  }
  return count;
}
```
