function main() {
const v2 = Object.preventExtensions(Object);
// v2 = .object()
const v3 = v2.seal();
// v3 = .unknown
let v6 = 0;
}
%NeverOptimizeFunction(main);
main();
