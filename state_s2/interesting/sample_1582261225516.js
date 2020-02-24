function main() {
const v1 = [13.37,13.37];
// v1 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v2 = v1.__proto__;
// v2 = .object()
const v3 = {};
// v3 = .object(ofGroup: Object, withProperties: ["__proto__"])
const v15 = v2.indexOf(v3,9007199254740993);
// v15 = .unknown
}
%NeverOptimizeFunction(main);
main();
