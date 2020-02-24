function main() {
const v1 = [13.37,13.37,13.37];
// v1 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v2 = v1.__proto__;
// v2 = .object()
let v5 = 0;
const v6 = typeof 0;
// v6 = .string
const v8 = v6 === "string";
// v8 = .boolean
const v9 = v5 + 1;
// v9 = .primitive
v5 = v9;
const v10 = v2.indexOf();
// v10 = .unknown
}
%NeverOptimizeFunction(main);
main();
