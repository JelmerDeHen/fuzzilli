function main() {
const v1 = gc();
// v1 = .undefined
}
%NeverOptimizeFunction(main);
main();
