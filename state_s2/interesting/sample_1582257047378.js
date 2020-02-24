function main() {
const v4 = String.__proto__;
// v4 = .unknown
let v7 = 0;
const v8 = v7 + 1;
// v8 = .primitive
v7 = v8;
const v11 = String.prototype;
// v11 = .object()
const v12 = 3 | v11;
// v12 = .integer
const v18 = typeof v4;
// v18 = .string
const v20 = v18 === "boolean";
// v20 = .boolean
}
%NeverOptimizeFunction(main);
main();
