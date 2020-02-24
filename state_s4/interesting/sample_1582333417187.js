function main() {
const v2 = Object.preventExtensions(Object);
// v2 = .object()
const v3 = v2.isSealed();
// v3 = .unknown
}
%NeverOptimizeFunction(main);
main();
