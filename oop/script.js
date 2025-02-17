'use strict';

// function Person(name, birthYear) {
//   this.name = name;
//   this.birthYear = birthYear;

//   // // dont do this
//   // this.calcAge = function () {
//   //     console.log(2025 - birthYear);
//   //  }
// }

// const me = new Person('Barkindo', 2003);
// const you = new Person('Maheer', 2021);
// const him = new Person('Haidar', 2006);

// console.log(me, you, him);

// //  Prototypes
// Person.prototype.calcAge = function () {
//   console.log(2025 - this.birthYear);
// };

// me.calcAge();
// you.calcAge();
// him.calcAge();

// console.log(me.__proto__);
// console.log(you.__proto__ === Person.prototype);

// console.log(Person.prototype.isPrototypeOf(me)); //true
// console.log(Person.prototype.isPrototypeOf(Person)); //false

// Person.prototype.species = 'Homo Sapiens';
// console.log(me.species, you.species);

// console.log(me.hasOwnProperty('name'));
// console.log(me.hasOwnProperty('species'));

// console.log(me.__proto__);

// //object.prototype(top of prototype chain)
// console.log(me.__proto__.__proto__);
// console.dir(Person.prototype.constructor);

// // creating objects on array

// const arr = [3, 2, 3, 6, 4, 6, 2, 4];

// Array.prototype.unique = function () {
//   return [...new Set(this)];
// };
// console.log(arr.unique());

// // Coding Challenge 1

// // function Car(make, speed) {
// //   this.make = make;
// //   this.speed = speed;
// // }

// // Car.prototype.accelerate = function () {
// //   this.speed += 10;
// //   console.log(`${this.make} is going at  ${this.speed}km/hr`);
// // };

// // Car.prototype.break = function () {
// //   this.speed -= 5;

// //   console.log(`${this.make} is going at ${this.speed}km/hr`);
// // };

// // const bmw = new Car('M3', 120);
// // const mercedes = new Car('G63', 95);

// // bmw.accelerate();
// // bmw.accelerate();
// // bmw.accelerate();
// // bmw.break();
// // bmw.accelerate();
// // bmw.break();

// // mercedes.accelerate();
// // mercedes.break();
// // mercedes.accelerate();
// // mercedes.break();
// // bmw.accelerate();

// //  ES6 Classes

// class Persons {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }

//   calcAge() {
//     console.log(2025 - this.birthYear);
//   }

//   get age() {
//     return 2025 - this.birthYear;
//   }

//   set fullName(name) {
//     console.log(name);
//     if (name.includes(' ')) this._fullName = name;
//     else alert(`${name} is not a full Name!`);
//   }

//   get fullName() {
//     return this._fullName;
//   }
//   //  Static Method

//   static hey() {
//     console.log(` Hey there 👋`);
//   }
// }

// const child1 = new Persons('Maheer Usman', 2021);
// const child2 = new Persons('Sabreen Faruk', 2022);

// console.log(child1, child2);
// child1.calcAge();
// child2.calcAge();
// console.log(child1.age);

// //1.  Classes are not Hoisted
// // 2. classes are fist class citizens
// // (meaning they can be passed into functions and get returned)
// // 3. classes are only executed in strict mode

// // Getters and Setters

// const account = {
//   owner: 'Elon Musk',
//   _movements: [200, 320, 100, 503],

//   get latest() {
//     return this.movements.pop();
//   },

//   set latest(move) {
//     this.movements.push(move);
//   },
// };

// console.log(account.latest);
// account.latest = 50;
// console.log(account.movements);

// // // Object.create():(oop)

// const PersonProto = {
//   calcAge() {
//     console.log(2025 - this.birthYear);
//   },

//   init(name, birthYear) {
//     this.name = name;
//     this.birthYear = birthYear;
//   },
// };

// const sheikh = Object.create(PersonProto);
// sheikh.init('Sudais', 1980);
// sheikh.calcAge();

// console.log(sheikh.__proto__ === PersonProto);

// const teema = Object.create(PersonProto);
// teema.init('Fatima', 2015);

// console.log(sheikh, teema);

// // CODING CHALLENGE 2

// class Car {
//   constructor(make, speed) {
//     this.make = make;
//     this.speed = speed;
//   }

//   accelerate() {
//     this.speed += 10;
//     console.log(`${this.make} is going at ${this.speed}km/hr`);
//   }

//   break() {
//     this.speed -= 5;
//     console.log(`${this.make} is going at ${this.speed}km/hr`);
//   }

//   get SpeedUS() {
//     return this.speed / 1.6;
//   }

//   set SpeedUS(speed) {
//     this.speed * 1.6;
//   }
// }

// const ford = new Car('ford', 100);

// console.log(ford);

// ford.accelerate();
// ford.break();
// console.log(ford.SpeedUS);
// ford.speed = 50;
// console.log(ford);

// //  Inheritance between classes using constructor function

// function Person(name, birthYear) {
//   this.name = name;
//   this.birthYear = birthYear;

// }

// function Student(name, birthYear, regNo, course) {
// Person.call(this, name, birthYear);
//   this.regNo = regNo;
//   this.course = course;

// }

// Student.prototype.constructor = Student;

// // LINKING PROTOTYPE
// Student.prototype = Object.create(Person.prototype);

// Student.prototype.introduce = function () {
//   console.log(`My name is ${this.name} and i study ${this.course}`);

// }

// const fura = new Student('Ibrahim', 2004, 'cis/ste/22/1176', 'cyber security')
// const i = new Student('Barkndo', 2003, 'cis/ste/22/1079', 'software engineering');

// console.log(fura, i);
// fura.introduce();
// i.introduce();
// fura.calcAge()
// i.calcAge();

// //  Challenge 3

// function Car(make, speed) {
//   this.make = make;
//   this.speed = speed;
// }

// Car.prototype.accelerate = function () {
//   this.speed += 10;
//   console.log(`${this.make} is going at  ${this.speed}km/hr`);
// };

// Car.prototype.break = function () {
//   this.speed -= 5;

//   console.log(`${this.make} is going at ${this.speed}km/hr`);
// };

// function EV(make, speed, charge) {
//   Car.call(this, make, speed);
//   this.charge = charge;
// }

// //linking prototypes

// EV.prototype = Object.create(Car.prototype);

// EV.prototype.chargeBattery = function (chargeTo) {
//   this.charge = chargeTo;
// };

// EV.prototype.accelerate = function () {
//   this.speed += 20;
//   this.charge--;

//   console.log(`${this.make} is going at $
//     {this.speed} km/hr with charge of ${this.charge}%`);
// };

// const tesla = new EV('tesla', 120, 23);
// tesla.chargeBattery(99);
// console.log(tesla);
// tesla.break();
// tesla.accelerate();
// tesla.accelerate();

//// ES6 Classes (inheritance between classes)

// class Persons {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }

//   calcAge() {
//     console.log(2025 - this.birthYear);
//   }

//   get age() {
//     return 2025 - this.birthYear;
//   }

//   set fullName(name) {
//     console.log(name);
//     if (name.includes(' ')) this._fullName = name;
//     else alert(`${name} is not a full Name!`);
//   }

//   get fullName() {
//     return this._fullName;
//   }
//   //  Static Method

//   static hey() {
//     console.log(` Hey there 👋`);
//   }
// }

// class Student extends Persons {
//   constructor(fullName, birthYear, course) {
//     super(fullName, birthYear);
//     this.course = course;
//   }

//   introduce() {
//     console.log(
//       `My name is ${this.fullName} i was born in the year ${this.birthYear} and i am studying ${this.course}`
//     );
//   }

//   calcAge() {
//     console.log(
//       `i'm ${2025 - this.birthYear} years old! but i look like ${
//         2025 - this.birthYear + 10
//       } years old!`
//     );
//   }
// }

// const deeqsa = new Student('Sadeeq Abubakar', 2004, 'Software Engineering');

// deeqsa.introduce();
// deeqsa.calcAge();

// //// Object.create(inheritance classes)

// const PersonProto = {
//   calcAge() {
//     console.log(2025 - this.birthYear);
//   },

//   init(name, birthYear) {
//     this.name = name;
//     this.birthYear = birthYear;
//   },
// };

// const StudentProto = Object.create(PersonProto);
// StudentProto.init = function (name, birthYear, course) {
//   PersonProto.init.call(this, name, birthYear);
//   this.course = course;
// };

// StudentProto.introduce = function () {
//   console.log(
//     `My name is ${this.name} i was born in the year ${this.birthYear} and i am studying ${this.course}`
//   );
// };

// const mj = Object.create(StudentProto);
// mj.init('Mujaheed', 1990, 'Computer Science');
// mj.introduce();
// mj.calcAge();

// // Classes Example

class Account {
  constructor(owner, currency, pin, movements) {
    this.owner = owner;
    this.currency = currency;
    this._pin = pin;
    this._movements = []
    this.locale = navigator.language;

    console.log(`Thanks for opening Account!`);

    
  }

  //  public interface

  getMovement() {
    return this._movements;
  }

  deposit(amount) {
    //  (_)protected
    this._movements.push(amount);
  }

  withdrawl(amount) {
    this.deposit(-amount);
  }
  _approveLoan(amount) {
    return true;
  }

  requestLoan(amount) {
    if (this.approveLoan(amount)) {
      this.deposit(amount);
      console.log(`Loan Approved`);
      
    }
  }
}

const acc1 = new Account('Abdurrahman', 'NGN', 2580, );

acc1.deposit(250);
acc1.withdrawl(150);
acc1.requestLoan(1000);

console.log(acc1.pin);
console.log(acc1);
console.log(acc1._movements)
console.log(acc1.getMovement());
