function main() {
let v6 = 0;
const v7 = v6 + 1;
// v7 = .primitive
v6 = v7;
const v12 = Math.log10();
// v12 = .number
}
%NeverOptimizeFunction(main);
main();
