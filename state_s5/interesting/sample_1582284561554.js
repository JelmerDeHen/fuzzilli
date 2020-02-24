function main() {
const v3 = Object.freeze(arguments);
// v3 = .undefined
arguments[1337] = 13.37;
}
%NeverOptimizeFunction(main);
main();
