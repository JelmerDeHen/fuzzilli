function main() {
const v1 = "symbol"[-65536];
// v1 = .unknown
}
%NeverOptimizeFunction(main);
main();
