function main() {
const v5 = "undefined"[-128];
// v5 = .unknown
}
%NeverOptimizeFunction(main);
main();
