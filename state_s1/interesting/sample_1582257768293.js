function main() {
const v2 = new Set("asyncIterator");
// v2 = .object(ofGroup: Set, withProperties: ["__proto__", "size"], withMethods: ["clear", "keys", "add", "forEach", "has", "entries", "values", "delete"])
const v3 = v2.__proto__;
// v3 = .object()
let v6 = 0;
const v7 = v6 + 1;
// v7 = .primitive
v6 = v7;
let v12 = 0;
const v13 = v12 + 1;
// v13 = .primitive
v12 = v13;
const v14 = gc();
// v14 = .undefined
const v15 = gc();
// v15 = .undefined
}
%NeverOptimizeFunction(main);
main();
