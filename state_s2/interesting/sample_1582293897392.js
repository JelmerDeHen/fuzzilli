function main() {
const v1 = -Infinity;
// v1 = .float
let v2 = v1;
const v3 = Math.tanh(v2,v1);
// v3 = .number
}
%NeverOptimizeFunction(main);
main();
