function main() {
let v8 = 0;
const v9 = gc();
// v9 = .undefined
let v11 = undefined;
const v13 = "iterator".lastIndexOf(1337,1337);
// v13 = .integer
}
%NeverOptimizeFunction(main);
main();
