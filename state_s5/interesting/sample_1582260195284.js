function main() {
const v1 = Number();
// v1 = .number
const v2 = new Number();
// v2 = .number
const v3 = v1[v2];
// v3 = .unknown
}
%NeverOptimizeFunction(main);
main();
