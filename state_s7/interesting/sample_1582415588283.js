function main() {
const v2 = Object(64);
// v2 = .object()
const v5 = v2.toString(10,1337);
// v5 = .unknown
}
%NeverOptimizeFunction(main);
main();
