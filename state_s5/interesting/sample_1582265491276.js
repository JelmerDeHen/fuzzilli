function main() {
let v5 = 0;
const v8 = "__proto__"["__proto__"];
// v8 = .unknown
let v12 = 0;
const v15 = Object.isSealed(v8);
// v15 = .boolean
const v17 = v5 + 1;
// v17 = .primitive
v5 = v17;
}
%NeverOptimizeFunction(main);
main();
