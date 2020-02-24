function main() {
const v2 = RegExp("a");
// v2 = .object()
const v6 = RegExp.apply("a",v2);
// v6 = .unknown
const v7 = typeof 1;
// v7 = .string
const v9 = v7 === "symbol";
// v9 = .boolean
}
%NeverOptimizeFunction(main);
main();
