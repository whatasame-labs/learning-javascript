function checkSpam(str) {
  const upperCaseStr = str.toUpperCase();

  return upperCaseStr.includes('VIAGRA') || upperCaseStr.includes('XXX');
}

console.log(checkSpam('buy ViAgRA now') === true);
console.log(checkSpam('free xxxxx') === true);
console.log(checkSpam('innocent rabbit') === false);
