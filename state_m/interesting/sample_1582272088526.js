function main() {
let v1 = "9gU0xT00QL";
let v4 = Infinity;
let v5 = v4;
const v6 = v5.toLocaleString();
// v6 = .unknown
const v7 = RegExp(v6);
// v7 = .object()
"9gU0xT00QL"[v6] = RegExp;
v6[v7] = v1;
}
%NeverOptimizeFunction(main);
main();
