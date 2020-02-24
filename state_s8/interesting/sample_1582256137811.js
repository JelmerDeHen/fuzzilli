function main() {
const v1 = -Infinity;
// v1 = .float
const v2 = "object".__proto__;
// v2 = .object()
v2[v1] = 6;
}
%NeverOptimizeFunction(main);
main();
