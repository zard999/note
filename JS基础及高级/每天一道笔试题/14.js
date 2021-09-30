var a = [0];

if (a) {
  console.log(a == true);
} else {
  console.log(a);
}

(function () {
  var a = (b = 5);
})();

console.log(b);
console.log(a);
