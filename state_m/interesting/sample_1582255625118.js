function main() {
let v3 = 0;
const v4 = v3 + 1;
// v4 = .primitive
v3 = v4;
let v8 = 0;
const v9 = v8 + 1;
// v9 = .primitive
v8 = v9;
const v18 = Object.seal(Array);
// v18 = .object()
}
%NeverOptimizeFunction(main);
main();
