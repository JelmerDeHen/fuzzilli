function main() {
const v1 = [];
// v1 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v2 = {a:1337,valueOf:v1,d:v1,e:1337};
// v2 = .object(ofGroup: Object, withProperties: ["__proto__", "a", "e", "valueOf", "d"])
const v3 = v2 + 1;
// v3 = .primitive
const v5 = new Int8Array(v3);
// v5 = .object(ofGroup: Int8Array, withProperties: ["__proto__", "buffer", "byteOffset", "constructor", "length", "byteLength"], withMethods: ["some", "fill", "copyWithin", "values", "reduceRight", "lastIndexOf", "findIndex", "slice", "join", "indexOf", "reverse", "sort", "forEach", "map", "find", "subarray", "reduce", "every", "keys", "includes", "entries", "filter", "set"])
const v6 = v5.reverse();
// v6 = .undefined
}
%NeverOptimizeFunction(main);
main();
