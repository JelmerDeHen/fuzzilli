function main() {
let v3 = 0;
const v4 = v3 + 1;
// v4 = .primitive
v3 = v4;
const v6 = Object();
// v6 = .object()
v6[512] = "undefined";
}
%NeverOptimizeFunction(main);
main();
