function main() {
const v2 = [3,1337,1337,3];
// v2 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v5 = new Uint16Array(v2);
// v5 = .object(ofGroup: Uint16Array, withProperties: ["__proto__", "constructor", "byteOffset", "buffer", "byteLength", "length"], withMethods: ["fill", "reverse", "keys", "forEach", "set", "indexOf", "subarray", "lastIndexOf", "sort", "reduce", "findIndex", "map", "every", "entries", "join", "find", "some", "slice", "values", "includes", "filter", "reduceRight", "copyWithin"])
v5.constructor = Int32Array;
const v7 = v5.slice(Int32Array,1000);
// v7 = .object(ofGroup: Uint16Array, withProperties: ["byteLength", "byteOffset", "__proto__", "buffer", "length", "constructor"], withMethods: ["fill", "forEach", "lastIndexOf", "findIndex", "join", "indexOf", "copyWithin", "keys", "map", "set", "reverse", "includes", "filter", "find", "every", "reduceRight", "values", "sort", "some", "reduce", "entries", "slice", "subarray"])
}
%NeverOptimizeFunction(main);
main();
