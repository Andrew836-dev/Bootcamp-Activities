// console.log(process.argv[2]);
// console.log(process.argv[3]);

console.log(process.argv[2] == process.argv[3]);
console.log(process.argv.indexOf(process.argv[3]));
if (process.argv.indexOf(process.argv[3]) == 2) {
    console.log(true);
}
else {
    console.log(false);
}
// var check = process.argv.pop();
// var checkTwo = process.argv.pop();
// console.log(check);
// console.log(process.argv.indexOf(check));