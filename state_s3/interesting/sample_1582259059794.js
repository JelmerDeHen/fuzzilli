function main() {
const v2 = Object.getOwnPropertyDescriptors(Array);
// v2 = .object()
}
%NeverOptimizeFunction(main);
main();
