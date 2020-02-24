function main() {
const v1 = (65535).__proto__;
// v1 = .unknown
const v2 = (65535)[v1];
// v2 = .unknown
const v9 = [];
// v9 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v10 = {constructor:v9};
// v10 = .object(ofGroup: Object, withProperties: ["__proto__", "constructor"])
}
%NeverOptimizeFunction(main);
main();
