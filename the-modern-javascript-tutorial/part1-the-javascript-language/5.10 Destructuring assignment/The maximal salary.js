let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

function topSalary(obj) {
  let maxSalary = 0;
  let maxName = null;

  for (const [name, salary] of Object.entries(salaries)) {
    if (salary < maxSalary) {
      continue;
    }

    [maxSalary, maxName] = [salary, name];
  }

  return maxName;
}
