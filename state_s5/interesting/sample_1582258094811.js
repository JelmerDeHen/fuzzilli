function main() {
const v1 = [13.37,13.37,13.37];
// v1 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
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
