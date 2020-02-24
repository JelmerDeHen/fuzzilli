function main() {
const v1 = (4096).__proto__;
// v1 = .unknown
const v3 = RegExp(v1);
// v3 = .object()
}
%NeverOptimizeFunction(main);
main();
