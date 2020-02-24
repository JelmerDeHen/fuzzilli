function main() {
const v3 = [13.37];
// v3 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
let v4 = Object;
const v5 = "object".__proto__;
// v5 = .object()
const v6 = v3 == v5;
// v6 = .boolean
let v12 = 0;
let v15 = 0;
const v16 = v15 + 1;
// v16 = .primitive
v15 = v16;
const v17 = v12 + 1;
// v17 = .primitive
v12 = v17;
const v18 = v4.preventExtensions(v5);
// v18 = .object()
}
%NeverOptimizeFunction(main);
main();
