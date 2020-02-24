function main() {
const v5 = Object.isFrozen(Symbol);
// v5 = .boolean
}
%NeverOptimizeFunction(main);
main();
