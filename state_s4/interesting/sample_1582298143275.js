function main() {
Object[65535] = Object;
const v4 = Object.preventExtensions(Object);
// v4 = .object()
const v6 = Object.freeze(Object);
// v6 = .undefined
let v9 = 0;
const v10 = v9 + 1;
// v10 = .primitive
v9 = v10;
}
%NeverOptimizeFunction(main);
main();
