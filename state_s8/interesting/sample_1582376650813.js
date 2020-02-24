function main() {
Object[8] = Object;
const v4 = Object.seal(Object);
// v4 = .object()
const v5 = Object.entries(Object);
// v5 = .object()
}
%NeverOptimizeFunction(main);
main();
