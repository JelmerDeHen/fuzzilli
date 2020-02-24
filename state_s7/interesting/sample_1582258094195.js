function main() {
const v1 = [13.37,13.37,13.37];
// v1 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
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
