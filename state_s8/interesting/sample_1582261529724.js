function main() {
const v1 = new Promise(Promise);
// v1 = .object()
const v3 = gc();
// v3 = .undefined
const v4 = gc();
// v4 = .undefined
}
%NeverOptimizeFunction(main);
main();
