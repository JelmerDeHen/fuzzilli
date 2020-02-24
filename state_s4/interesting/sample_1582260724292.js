function main() {
const v2 = Object.seal(this);
// v2 = .object()
}
%NeverOptimizeFunction(main);
main();
