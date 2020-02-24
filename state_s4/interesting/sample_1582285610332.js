function main() {
let v2 = 0;
const v3 = v2 + 1;
// v3 = .primitive
v2 = v3;
const v6 = Object.freeze(Object);
// v6 = .undefined
const v10 = Object.entries(Object);
// v10 = .object()
}
%NeverOptimizeFunction(main);
main();
