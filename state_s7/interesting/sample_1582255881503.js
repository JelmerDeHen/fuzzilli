function main() {
const v1 = (4043029500).toString();
// v1 = .unknown
const v3 = parseInt(v1);
// v3 = .integer
}
%NeverOptimizeFunction(main);
main();
