function main() {
const v2 = [];
// v2 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v3 = {__proto__:4,length:1337,constructor:1337,a:v2};
// v3 = .object(ofGroup: Object, withProperties: ["__proto__", "constructor", "a", "length"])
const v6 = new Uint16Array(v3);
// v6 = .object(ofGroup: Uint16Array, withProperties: ["__proto__", "constructor", "byteOffset", "buffer", "byteLength", "length"], withMethods: ["fill", "reverse", "keys", "forEach", "set", "indexOf", "subarray", "lastIndexOf", "sort", "reduce", "findIndex", "map", "every", "entries", "join", "find", "some", "slice", "values", "includes", "filter", "reduceRight", "copyWithin"])
v6.constructor = Int16Array;
const v8 = v6.slice(v6,1337);
// v8 = .object(ofGroup: Uint16Array, withProperties: ["byteLength", "byteOffset", "__proto__", "buffer", "length", "constructor"], withMethods: ["fill", "forEach", "lastIndexOf", "findIndex", "join", "indexOf", "copyWithin", "keys", "map", "set", "reverse", "includes", "filter", "find", "every", "reduceRight", "values", "sort", "some", "reduce", "entries", "slice", "subarray"])
}
%NeverOptimizeFunction(main);
main();
