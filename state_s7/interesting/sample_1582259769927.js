function main() {
const v1 = RegExp.bind(RegExp);
// v1 = .unknown
const v2 = v1();
// v2 = .unknown
const v3 = v2.__proto__;
// v3 = .unknown
const v7 = RegExp(v3);
// v7 = .object()
}
%NeverOptimizeFunction(main);
main();
