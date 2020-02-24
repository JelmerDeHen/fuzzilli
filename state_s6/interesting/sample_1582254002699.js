function main() {
let v2 = 0;
const v3 = v2 + 1;
// v3 = .primitive
v2 = v3;
const v5 = (0)[Symbol];
// v5 = .unknown
}
%NeverOptimizeFunction(main);
main();
