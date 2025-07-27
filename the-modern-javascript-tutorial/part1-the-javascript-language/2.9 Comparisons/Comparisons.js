5 > 4                       // true
"apple" > "pineapple"       // false (dictionary)
"2" > "12"                  // true (dictionary)
undefined == null           // true (special rule)
undefined === null          // false (strict check)
null == "\n0\n"             // false (null only equals by self)
null === +"\n0\n"           // null === 0 -> false (strict check)