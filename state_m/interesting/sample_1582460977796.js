function main() {
let v2 = -2.220446049250313e-16;
const v3 = v2 + 1;
// v3 = .primitive
let v6 = v3;
const v7 = Math.pow(v6,4284182497);
// v7 = .number
v2 = v3;
}
%NeverOptimizeFunction(main);
main();
