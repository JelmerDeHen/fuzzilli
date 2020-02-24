function main() {
let v9 = undefined;
let v16 = 0;
let v19 = 0;
const v20 = v19 + 1;
// v20 = .primitive
v19 = v20;
const v22 = v16 + 1;
// v22 = .primitive
v16 = v22;
const v27 = RegExp(v9);
// v27 = .object()
v27.a = v27;
}
%NeverOptimizeFunction(main);
main();
