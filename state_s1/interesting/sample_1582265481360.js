function main() {
const v2 = [1337,1337,1337];
// v2 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v3 = {toString:Uint8Array,__proto__:Uint8Array};
// v3 = .object(ofGroup: Object, withProperties: ["toString", "__proto__"])
const v4 = {b:v3,__proto__:v2,constructor:1337,a:Uint8Array};
// v4 = .object(ofGroup: Object, withProperties: ["a", "constructor", "__proto__", "b"])
const v6 = Object.freeze(v2);
// v6 = .undefined
}
%NeverOptimizeFunction(main);
main();
