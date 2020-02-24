function main() {
const v2 = [1337,1337];
// v2 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
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
