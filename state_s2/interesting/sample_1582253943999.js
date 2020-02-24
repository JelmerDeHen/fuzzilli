function main() {
const v1 = "object".toPrimitive;
// v1 = .unknown
}
%NeverOptimizeFunction(main);
main();
