function main() {
let v37 = 0;
const v40 = v37 + 1;
// v40 = .primitive
v37 = v40;
const v41 = 13.37 >> 1337;
// v41 = .integer
const v42 = "symbol".length;
// v42 = .integer
}
%NeverOptimizeFunction(main);
main();
