var square = x => x * x;
console.log(square(9));

var user = {
  name : 'Jason',
  sayHi: () => {
    console.log(arguments);
    console.log(`Hi. I'm ${this.name}`);
  },
  sayHiAlt () {
    console.log(arguments);
    console.log(`Hi. I'm ${this.name}`);
  }
}

// 'this' not bound, 'arguments' not as expected
// user.sayHi(1, 2, 3);

// 'this' is bound, 'arguments' as expected
user.sayHiAlt(1, 2, 3);