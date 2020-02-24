function main() {
const v1 = new Promise(Promise);
// v1 = .object()
const v3 = gc();
// v3 = .undefined
let v6 = 0;
const v7 = v6 + 1;
// v7 = .primitive
v6 = v7;
}
%NeverOptimizeFunction(main);
main();
