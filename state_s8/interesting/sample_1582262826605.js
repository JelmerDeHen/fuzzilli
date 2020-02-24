function main() {
let v3 = 0;
const v5 = Math.asinh(1024);
// v5 = .number
const v6 = v3 + 1;
// v6 = .primitive
v3 = v6;
}
%NeverOptimizeFunction(main);
main();
