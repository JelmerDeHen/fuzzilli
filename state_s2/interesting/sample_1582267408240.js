function main() {
const v2 = Math.log2(1337);
// v2 = .number
const v4 = Math.log10(v2);
// v4 = .number
}
%NeverOptimizeFunction(main);
main();
