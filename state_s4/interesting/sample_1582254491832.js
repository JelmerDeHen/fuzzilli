function main() {
const v2 = "object".__proto__;
// v2 = .object()
let v5 = 0;
const v6 = v5 + 1;
// v6 = .primitive
v5 = v6;
v2[13.37] = 6;
let v9 = 0;
const v10 = v9 + 1;
// v10 = .primitive
v9 = v10;
for (const v12 in "object") {
}
}
%NeverOptimizeFunction(main);
main();
