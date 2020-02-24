function main() {
const v2 = Object.getOwnPropertyDescriptors(2);
// v2 = .object()
}
%NeverOptimizeFunction(main);
main();
