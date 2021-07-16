// Example 1: addUpTo
// write a function that takes an input n, and returns the sum from 1 up to n
// addUpTo(3) --> 6

// This answer involves creating a recursive function that calls itself over and over
const addUpTo = (n) => {
  if(n < 1) return undefined; // This check is to see if a user inputed a number < 1. Depending on how you interpret the problem statement, this might be unnecessary
  // If the problem had said "Write a function that takes a POSITIVE input n" we wouldn't need this. As written, it is a little ambiguous, so I included it.
  if(n === 1) return n; // this is our "Base Case" and will stop the recursive function calls from continuing infinitely
  return n + addUpTo(n-1);
}



// this is a very straight forward answer
const addUpTo = (n) => {
  if(n < 1) return undefined; // This check is to see if a user inputed a number < 1. Depending on how you interpret the problem statement, this might be unnecessary
  // If the problem had said "Write a function that takes a POSITIVE input n" we wouldn't need this. As written, it is a little ambiguous, so I included it.
  let sum = 0;
  for(let i=1; i<=n; i++){
    sum += i;
  }
  return i;
}



// A cheat-code-like shortcut for this particular problem
const addUpTo = (n) => {
  if(n < 1) return undefined;
  // this is a mathematical derivation. I would not expect anyone to know this. I only know about it from doing this algorithm previously and seeing it as a possible answer
  return ((n * (n+1)) / 2);
}

console.log(addUpTo(3)); // 6
console.log(addUpTo(5)); // 15