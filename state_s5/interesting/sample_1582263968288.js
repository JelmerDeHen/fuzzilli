function main() {
let v1 = 0;
const v2 = v1 + 1;
// v2 = .primitive
const v4 = Math.asin(v2);
// v4 = .number
}
%NeverOptimizeFunction(main);
main();
