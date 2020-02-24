function main() {
const v1 = Object();
// v1 = .object()
const v2 = v1.__proto__;
// v2 = .unknown
const v3 = Object.create(v2,Object);
// v3 = .object()
}
%NeverOptimizeFunction(main);
main();
