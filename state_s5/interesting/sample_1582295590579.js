function main() {
const v3 = 1337 - Infinity;
// v3 = .number
let v4 = v3;
const v5 = Math.atan2(v4,Infinity);
// v5 = .number
}
%NeverOptimizeFunction(main);
main();
