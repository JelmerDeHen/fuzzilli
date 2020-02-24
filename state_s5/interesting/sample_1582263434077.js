function main() {
const v2 = "undefined".__proto__;
// v2 = .object()
v2[3133106106] = v2;
const v3 = v2.__proto__;
// v3 = .unknown
v3[3133106106] = v3;
let v7 = 0;
const v8 = v7 + 1;
// v8 = .primitive
v7 = v8;
for (const v13 in "object") {
}
}
%NeverOptimizeFunction(main);
main();
