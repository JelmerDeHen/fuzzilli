function main() {
let v4 = 0;
const v5 = Object.preventExtensions(Object);
// v5 = .object()
const v6 = v4 + 1;
// v6 = .primitive
v4 = v6;
for (const v8 in Object) {
}
}
%NeverOptimizeFunction(main);
main();
