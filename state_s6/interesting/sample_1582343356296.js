function main() {
Object[65535] = Object;
const v5 = Object.seal(Object);
// v5 = .object()
const v6 = Object.freeze(Object);
// v6 = .undefined
}
%NeverOptimizeFunction(main);
main();
