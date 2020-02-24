function main() {
const v3 = Object.freeze(Reflect);
// v3 = .undefined
Reflect.d = 1337;
}
%NeverOptimizeFunction(main);
main();
