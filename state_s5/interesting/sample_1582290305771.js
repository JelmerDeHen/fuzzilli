function main() {
const v2 = -Infinity;
// v2 = .float
let v3 = v2;
const v4 = Math.atan2(v3,13.37);
// v4 = .number
}
%NeverOptimizeFunction(main);
main();
