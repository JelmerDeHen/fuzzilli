function main() {
let v1 = 0;
const v2 = v1 - 1;
// v2 = .primitive
v1 = v2;
let v3 = v1;
const v5 = Math.expm1(v3);
// v5 = .number
}
%NeverOptimizeFunction(main);
main();
