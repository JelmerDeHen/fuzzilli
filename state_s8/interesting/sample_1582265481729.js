function main() {
const v2 = [1337,1337,1337];
// v2 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v3 = {toString:Uint8Array,__proto__:Uint8Array};
// v3 = .object(ofGroup: Object, withProperties: ["__proto__", "toString"])
const v4 = {b:v3,__proto__:v2,constructor:1337,a:Uint8Array};
// v4 = .object(ofGroup: Object, withProperties: ["__proto__", "b", "constructor", "a"])
const v6 = Object.freeze(v2);
// v6 = .undefined
}
%NeverOptimizeFunction(main);
main();
