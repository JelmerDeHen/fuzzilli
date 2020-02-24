function main() {
const v3 = Object.seal(Array);
// v3 = .object()
Array[RegExp] = 0;
}
%NeverOptimizeFunction(main);
main();
