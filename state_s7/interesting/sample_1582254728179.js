function main() {
const v2 = Object.freeze(1337);
// v2 = .undefined
}
%NeverOptimizeFunction(main);
main();
