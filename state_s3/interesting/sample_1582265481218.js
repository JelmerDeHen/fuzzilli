function main() {
const v2 = [1337,1337,1337];
// v2 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v3 = {toString:Uint8Array,__proto__:Uint8Array};
// v3 = .object(ofGroup: Object, withProperties: ["__proto__", "toString"])
const v4 = {b:v3,__proto__:v2,constructor:1337,a:Uint8Array};
// v4 = .object(ofGroup: Object, withProperties: ["constructor", "a", "__proto__", "b"])
const v6 = Object.freeze(v2);
// v6 = .undefined
}
%NeverOptimizeFunction(main);
main();
