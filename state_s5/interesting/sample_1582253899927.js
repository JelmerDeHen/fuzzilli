function main() {
const v2 = (1337).constructor;
// v2 = .unknown
}
%NeverOptimizeFunction(main);
main();
