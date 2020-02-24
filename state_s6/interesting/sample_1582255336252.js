function main() {
const v1 = 2147483647 | 2147483647;
// v1 = .integer
let v4 = 0;
const v6 = v4 + 1;
// v6 = .primitive
v4 = v6;
}
%NeverOptimizeFunction(main);
main();
