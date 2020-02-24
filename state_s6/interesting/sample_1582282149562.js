function main() {
const v1 = -Infinity;
// v1 = .float
let v3 = 0;
const v4 = v3 - 1;
// v4 = .primitive
v3 = v4;
const v5 = Math.atan2(v3,v1);
// v5 = .number
}
%NeverOptimizeFunction(main);
main();
