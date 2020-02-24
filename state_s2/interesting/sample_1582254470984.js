function main() {
let v4 = 0;
const v5 = v4 + 1;
// v5 = .primitive
v4 = v5;
const v6 = "pvU0UUjoya".__proto__;
// v6 = .object()
v6.toString = Array;
let v12 = 0;
const v17 = Object();
// v17 = .object()
let v20 = 0;
const v21 = typeof Array;
// v21 = .string
const v23 = v21 === "undefined";
// v23 = .boolean
}
%NeverOptimizeFunction(main);
main();
