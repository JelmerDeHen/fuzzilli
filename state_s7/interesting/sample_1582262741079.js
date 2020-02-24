function main() {
const v2 = [1337,1337];
// v2 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v3 = {};
// v3 = .object(ofGroup: Object, withProperties: ["__proto__"])
const v7 = v3.__proto__;
// v7 = .object()
v7.length = -2831930998;
let v10 = 0;
const v12 = (1337).__proto__;
// v12 = .unknown
const v13 = v12.toLocaleString(2147483648);
// v13 = .unknown
}
%NeverOptimizeFunction(main);
main();
