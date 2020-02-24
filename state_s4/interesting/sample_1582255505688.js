function main() {
const v2 = Boolean.prototype;
// v2 = .object()
const v3 = "species".__proto__;
// v3 = .object()
v3[256] = v2;
const v5 = [13.37,13.37,13.37,13.37,13.37];
// v5 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
let v6 = v5;
for (const v8 in "object") {
}
}
%NeverOptimizeFunction(main);
main();
