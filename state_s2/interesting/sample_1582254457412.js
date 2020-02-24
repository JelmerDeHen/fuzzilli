function main() {
const v1 = (1337).__proto__;
// v1 = .unknown
}
%NeverOptimizeFunction(main);
main();
