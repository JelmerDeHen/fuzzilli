function main() {
let v22 = 0;
const v23 = v22 + 1;
// v23 = .primitive
v22 = v23;
const v31 = 13.37 >> 9007199254740993;
// v31 = .integer
}
%NeverOptimizeFunction(main);
main();
