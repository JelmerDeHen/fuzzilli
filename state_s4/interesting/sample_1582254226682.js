function main() {
const v2 = [13.37,13.37];
// v2 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v3 = v2[1024];
// v3 = .unknown
let v6 = 0;
const v7 = v6 + 1;
// v7 = .primitive
v6 = v7;
const v8 = typeof Array;
// v8 = .string
const v10 = v8 === "function";
// v10 = .boolean
for (const v11 in v6) {
}
}
%NeverOptimizeFunction(main);
main();
