function main() {
const v2 = (1337).constructor;
// v2 = .unknown
const v5 = 1337 == 13.37;
// v5 = .boolean
}
%NeverOptimizeFunction(main);
main();
