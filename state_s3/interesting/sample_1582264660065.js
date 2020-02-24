function main() {
let v2 = Infinity;
let v3 = v2;
let v7 = 0;
const v8 = v7 + 1;
// v8 = .primitive
v7 = v8;
const v9 = v3.toLocaleString();
// v9 = .unknown
const v10 = RegExp(v9);
// v10 = .object()
}
%NeverOptimizeFunction(main);
main();
