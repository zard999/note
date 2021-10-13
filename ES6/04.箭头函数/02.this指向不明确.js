const person = {
  eat() {
    console.log(this);
  },
  drink: () => {
    console.log(this);
  },
};
person.eat();
person.drink();
