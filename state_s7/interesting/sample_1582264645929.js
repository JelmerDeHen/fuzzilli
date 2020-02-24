function main() {
let v4 = Infinity;
let v5 = v4;
const v6 = 1 && Float64Array;
// v6 = .boolean
let v9 = 0;
const v10 = v9 + 1;
// v10 = .primitive
v9 = v10;
const v11 = v5.toLocaleString();
// v11 = .unknown
const v12 = RegExp(v11);
// v12 = .object()
}
%NeverOptimizeFunction(main);
main();
