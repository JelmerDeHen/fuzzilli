function main() {
let v33 = 0;
const v34 = v33 + 1;
// v34 = .primitive
v33 = v34;
const v291 = 0 | 1337;
// v291 = .integer
}
%NeverOptimizeFunction(main);
main();
