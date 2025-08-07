function checkAge(age) {
    if (age > 18) {
      return true;
    }
    // It works!
    return confirm('Did parents allow you?');
  }
  