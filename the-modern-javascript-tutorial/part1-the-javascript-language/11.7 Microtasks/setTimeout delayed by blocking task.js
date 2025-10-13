console.time("delay");

setTimeout(() => {
  console.timeEnd("delay"); // 대략 5000ms 근처에 찍힘 (2초 아님)
}, 2000);

// 메인 스레드를 5초 동안 바쁘게 함 (절대 이렇게 코딩하지 마세요)
const start = Date.now();
while (Date.now() - start < 5000) {
  // busy loop
}
