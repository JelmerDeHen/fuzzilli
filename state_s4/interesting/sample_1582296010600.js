function main() {
Object[8] = Reflect;
const v3 = Object.freeze(Object);
// v3 = .undefined
for (const v4 in Object) {
}
}
%NeverOptimizeFunction(main);
main();
