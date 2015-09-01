// learnyounode exercise 2
var sum = 0;
for (i = 2; process.argv[i] != null;i++) {
  sum += Number(process.argv[i]);
}
console.log(sum)
