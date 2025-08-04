function multiplyNumeric(obj) {
  for (const key in obj) {
    if (typeof obj[key] !== "number") {
      continue;
    }

    obj[key] *= 2;
  }
}

let menu = {
  width: 200,
  height: 300,
  title: "My menu",
};

multiplyNumeric(menu);

alert(menu);
