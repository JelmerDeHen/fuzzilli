function main() {
const v4 = 1337 == 13.37;
// v4 = .boolean
const v5 = "iterator"[-1024];
// v5 = .unknown
}
%NeverOptimizeFunction(main);
main();
