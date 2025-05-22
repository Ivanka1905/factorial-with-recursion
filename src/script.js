"use strict";

function getFuctorial(n) {
  if (n === 0 || n === 1) return n;

  return n * getFuctorial(n - 1);
}

console.log(getFuctorial(6));
