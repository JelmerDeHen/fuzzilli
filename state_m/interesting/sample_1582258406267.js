function main() {
const v2 = Object.isFrozen(1075001128);
// v2 = .boolean
}
%NeverOptimizeFunction(main);
main();
