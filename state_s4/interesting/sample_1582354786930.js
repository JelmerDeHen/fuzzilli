function main() {
Object[8] = Object;
const v4 = Object.seal(Object);
// v4 = .object()
const v5 = Object.freeze(Object);
// v5 = .undefined
}
%NeverOptimizeFunction(main);
main();
