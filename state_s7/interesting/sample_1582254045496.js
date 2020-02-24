function main() {
const v50 = "undefined".charCodeAt(1337);
// v50 = .integer
}
%NeverOptimizeFunction(main);
main();
