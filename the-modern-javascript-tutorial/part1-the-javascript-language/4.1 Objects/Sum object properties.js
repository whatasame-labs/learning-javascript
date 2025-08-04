let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

let sum = 0;
for (const name in salaries) {
  sum += salaries[name];  // 대괄호 표기법 사용
}

alert(sum);
