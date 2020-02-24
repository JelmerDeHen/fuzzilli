function main() {
const v2 = [1337,1337,1337];
// v2 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v3 = {toString:Uint8Array,__proto__:Uint8Array};
// v3 = .object(ofGroup: Object, withProperties: ["toString", "__proto__"])
const v4 = {b:v3,__proto__:v2,constructor:1337,a:Uint8Array};
// v4 = .object(ofGroup: Object, withProperties: ["__proto__", "a", "b", "constructor"])
const v6 = Object.freeze(v2);
// v6 = .undefined
}
%NeverOptimizeFunction(main);
main();
