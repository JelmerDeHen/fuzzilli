function main() {
const v5 = Object.preventExtensions(Object);
// v5 = .object()
const v6 = v5.seal();
// v6 = .unknown
}
%NeverOptimizeFunction(main);
main();
