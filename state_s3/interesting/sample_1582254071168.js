function main() {
let v2 = 0;
const v3 = v2 + 1;
// v3 = .primitive
v2 = v3;
let v5 = 0;
const v6 = v5.toString();
// v6 = .unknown
}
%NeverOptimizeFunction(main);
main();
