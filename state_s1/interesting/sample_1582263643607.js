function main() {
const v3 = Object.defineProperties(Object,Int32Array);
// v3 = .undefined
}
%NeverOptimizeFunction(main);
main();
