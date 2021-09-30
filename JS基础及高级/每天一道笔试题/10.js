let a = {
  name: "jock",
  age: 20, // 24
};

function change(o) {
  o.age = 24;
  o = {
    name: "alan",
    age: 30,
  };
  return o;
}

let b = change(a);
console.log(b.age); //30
console.log(a.age); //24
