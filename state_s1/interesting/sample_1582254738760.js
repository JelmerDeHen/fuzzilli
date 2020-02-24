function main() {
let v133 = 0;
const v134 = v133 + 1;
// v134 = .primitive
v133 = v134;
const v136 = 1337 & 1337;
// v136 = .integer
}
%NeverOptimizeFunction(main);
main();
