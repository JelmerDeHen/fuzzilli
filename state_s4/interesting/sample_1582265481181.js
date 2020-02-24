function main() {
const v2 = [1337,1337,1337];
// v2 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v3 = {toString:Uint8Array,__proto__:Uint8Array};
// v3 = .object(ofGroup: Object, withProperties: ["__proto__", "toString"])
const v4 = {b:v3,__proto__:v2,constructor:1337,a:Uint8Array};
// v4 = .object(ofGroup: Object, withProperties: ["a", "constructor", "__proto__", "b"])
const v6 = Object.freeze(v2);
// v6 = .undefined
}
%NeverOptimizeFunction(main);
main();
