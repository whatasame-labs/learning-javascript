async function example() {
  console.log(1);
  await new Promise((res) => setTimeout(res, 1000)); // 1초 기다림 (함수 내부만 멈춤)
  console.log(2);
}
example();
console.log(3);

// 출력 순서:
// 1
// 3
// (1초 후)
// 2
