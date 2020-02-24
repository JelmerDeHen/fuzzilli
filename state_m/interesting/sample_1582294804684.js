function main() {
const v2 = Infinity.toLocaleString();
// v2 = .unknown
const v3 = v2.split(v2,1337);
// v3 = .unknown
}
%NeverOptimizeFunction(main);
main();
