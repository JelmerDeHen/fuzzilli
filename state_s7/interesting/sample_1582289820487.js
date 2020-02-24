function main() {
Object[8] = Reflect;
const v7 = Object.freeze(Object);
// v7 = .undefined
const v8 = Object.entries(Object);
// v8 = .object()
}
%NeverOptimizeFunction(main);
main();
