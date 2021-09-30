const person = { name: "alan" };

function sayHi(age) {
  return `${this.name} is ${age}`;
}
console.log(sayHi.call(person, 5)); // alan is 5
console.log(sayHi.bind(person, 5));
/* function sayHi(age) {
  return `${person.name} is ${age}`;
} */
