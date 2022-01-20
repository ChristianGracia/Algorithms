function example1(input) {
  let a = 10; // O(1)
  a = 50 + 3; // O(1)

  for (let i = 0; i < input.length; i++) {
    // O(n)
    anotherFunction(); // O(n)
    let stranger = true; // O(n)
    a++; // O(n)
  }
  return a; // O(1)
}

// Big O(3 + 4n)

// drop constants

// simplified to O(n)

function example2(input) {
  let a = 5; // O(1)
  let b = 10; // O(1)
  let c = 50; // O(1)
  for (let i = 0; i < input; i++) {
    let x = i + 1; // O(n)
    let y = i + 2; // O(n)
    let z = i + 3; // O(n)
  }
  for (let j = 0; j < input; j++) {
    let p = j * 2; // O(n)
    let q = j * 2; // O(n)
  }
  let whoAmI = "I don't know"; // O(1)
}

// Big O(4 + 5n)

// drop constants

// simplified to O(n)

////////////////////////////////////////////////////////////////////////////

function twoParams1(a, b) {
  a.forEach((item) => console.log(item));
  b.forEach((item) => console.log(item));
}

// Big O(a + b) because ran in order

function twoParams2(a, b) {
  a.forEach(() => b.forEach((item) => console.log(item)));
}

// Big O(a * b) because nested
