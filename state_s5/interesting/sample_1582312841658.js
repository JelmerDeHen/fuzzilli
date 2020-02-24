function main() {
const v2 = (-2.2250738585072014e-308).toLocaleString();
// v2 = .unknown
const v3 = v2.substring(v2,-312163617);
// v3 = .unknown
}
%NeverOptimizeFunction(main);
main();
