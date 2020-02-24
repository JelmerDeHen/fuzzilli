function main() {
let v1 = -3888010622;
const v2 = v1 + 1;
// v2 = .primitive
const v4 = Math.log(v2);
// v4 = .number
}
%NeverOptimizeFunction(main);
main();
