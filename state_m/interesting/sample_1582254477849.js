function main() {
const v2 = (1337).toString();
// v2 = .unknown
}
%NeverOptimizeFunction(main);
main();
