function main() {
let v2 = Infinity;
const v3 = Math.atan(v2,Infinity);
// v3 = .number
}
%NeverOptimizeFunction(main);
main();
