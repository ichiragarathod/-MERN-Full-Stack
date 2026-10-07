// ============================================
// 1.1 ALL JAVASCRIPT OPERATORS - COMPLETE DEMO
// ============================================

console.log('===== ARITHMETIC OPERATORS =====');
let a = 10, b = 3;
console.log('a + b =', a + b);          // 13
console.log('a - b =', a - b);          // 7
console.log('a * b =', a * b);          // 30
console.log('a / b =', a / b);          // 3.333...
console.log('a % b =', a % b);          // 1
console.log('a ** b =', a ** b);        // 1000
let c = 5;
console.log('c++ =', c++);              // 5 (then c becomes 6)
console.log('c after c++ =', c);        // 6
console.log('++c =', ++c);              // 7
let d = 5;
console.log('d-- =', d--);              // 5 (then d becomes 4)
console.log('d after d-- =', d);        // 4
console.log('--d =', --d);              // 3

console.log('\n===== ASSIGNMENT OPERATORS =====');
let x = 10;
console.log('x =', x);
x += 5;  console.log('x += 5  =>', x);   // 15
x -= 3;  console.log('x -= 3  =>', x);   // 12
x *= 2;  console.log('x *= 2  =>', x);   // 24
x /= 4;  console.log('x /= 4  =>', x);   // 6
x %= 5;  console.log('x %= 5  =>', x);   // 1
x **= 3; console.log('x **= 3 =>', x);   // 1
x <<= 1; console.log('x <<= 1 =>', x);   // 2
x >>= 1; console.log('x >>= 1 =>', x);   // 1
x >>>= 1;console.log('x >>>= 1=>', x);   // 0
x &= 7;  console.log('x &= 7  =>', x);   // 0
x ^= 3;  console.log('x ^= 3  =>', x);   // 3
x |= 8;  console.log('x |= 8  =>', x);   // 11

// Logical assignment
let y = null;
y ??= 5;  console.log('y ??= 5 =>', y);   // 5
let z = 0;
z ||= 10; console.log('z ||= 10 =>', z);  // 10
let w = 1;
w &&= 7;  console.log('w &&= 7 =>', w);   // 7

console.log('\n===== COMPARISON OPERATORS =====');
console.log('10 == "10"  =>', 10 == "10");   // true
console.log('10 === "10" =>', 10 === "10");  // false
console.log('10 != "10"  =>', 10 != "10");   // false
console.log('10 !== "10" =>', 10 !== "10");  // true
console.log('10 > 5      =>', 10 > 5);       // true
console.log('10 < 5      =>', 10 < 5);       // false
console.log('10 >= 10    =>', 10 >= 10);     // true
console.log('10 <= 5     =>', 10 <= 5);      // false

console.log('\n===== LOGICAL OPERATORS =====');
console.log('true && false =>', true && false); // false
console.log('true || false =>', true || false); // true
console.log('!true         =>', !true);         // false

console.log('\n===== NULLISH & OPTIONAL CHAINING =====');
let nullVal = null;
let undefVal;
console.log('nullVal ?? "default"  =>', nullVal ?? "default");   // "default"
console.log('undefVal ?? "default" =>', undefVal ?? "default");  // "default"
const obj = { a: { b: 42 } };
console.log('obj?.a?.b =>', obj?.a?.b);   // 42
console.log('obj?.c?.d =>', obj?.c?.d);   // undefined

console.log('\n===== TERNARY OPERATOR =====');
let age = 20;
console.log('age >= 18 ? "Adult" : "Minor" =>',
  age >= 18 ? "Adult" : "Minor"); // "Adult"

console.log('\n===== BITWISE OPERATORS =====');
let p = 5, q = 3; // 0101, 0011
console.log('p & q   =>', p & q);    // 1  (0001)
console.log('p | q   =>', p | q);    // 7  (0111)
console.log('p ^ q   =>', p ^ q);    // 6  (0110)
console.log('~p      =>', ~p);       // -6
console.log('p << 1  =>', p << 1);   // 10
console.log('p >> 1  =>', p >> 1);   // 2
console.log('p >>> 1 =>', p >>> 1);  // 2

console.log('\n===== UNARY OPERATORS =====');
console.log('+"5"           =>', +"5");        // 5
console.log('-"5"           =>', -"5");        // -5
console.log('!0             =>', !0);          // true
console.log('~5             =>', ~5);          // -6
console.log('typeof "hello" =>', typeof "hello"); // "string"
console.log('void 0         =>', void 0);      // undefined
const delObj = { a: 1, b: 2 };
delete delObj.a;
console.log('after delete delObj.a =>', delObj); // { b: 2 }

console.log('\n===== RELATIONAL OPERATORS =====');
console.log('"a" in {a:1}        =>', "a" in {a:1});        // true
console.log('[1,2] instanceof Array =>', [1,2] instanceof Array); // true

console.log('\n===== SPREAD / REST =====');
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];
console.log('spread arr2 =>', arr2); // [1,2,3,4,5]
function sum(...nums) {
  return nums.reduce((a, b) => a + b, 0);
}
console.log('rest sum(1,2,3) =>', sum(1,2,3)); // 6

console.log('\n===== COMMA OPERATOR =====');
let commaVal = (1, 2, 3);
console.log('(1,2,3) =>', commaVal); // 3

console.log('\n===== GROUPING / ACCESS =====');
console.log('(2 + 3) * 4 =>', (2 + 3) * 4); // 20
const person = { name: "Alice", age: 30 };
console.log('person.name    =>', person.name);    // "Alice"
console.log('person["age"]  =>', person["age"]);  // 30

console.log('\n===== OTHER KEYWORDS / OPERATORS =====');

// new + this
class Person {
  constructor(name) {
    this.name = name;
  }
  greet() {
    return `Hello, ${this.name}`;
  }
}
const alice = new Person("Alice");
console.log('new Person("Alice").greet() =>', alice.greet());

// super
class Student extends Person {
  constructor(name, grade) {
    super(name);
    this.grade = grade;
  }
  info() {
    return `${super.greet()} Grade: ${this.grade}`;
  }
}
const bob = new Student("Bob", "A");
console.log('super =>', bob.info());

// yield (generator)
function* generator() {
  yield 1;
  yield 2;
  yield 3;
}
const gen = generator();
console.log('yield =>', gen.next().value, gen.next().value, gen.next().value);

// await (async)
async function asyncDemo() {
  const promise = Promise.resolve(42);
  const result = await promise;
  console.log('await =>', result);
}
asyncDemo();

// import() dynamic
if (typeof require !== 'undefined') {
  import('fs').then(fs => {
    console.log('import() => dynamic import works (fs module loaded)');
  }).catch(err => console.log('import() error:', err.message));
} else {
  console.log('import() => only in module environments');
}

console.log('\n===== DEMO COMPLETE =====');