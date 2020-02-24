function main() {
const v2 = (1337).__proto__;
// v2 = .unknown
}
%NeverOptimizeFunction(main);
main();
