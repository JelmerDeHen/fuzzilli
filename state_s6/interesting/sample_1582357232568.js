function main() {
const v2 = [3,1337,1337,3];
// v2 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v5 = new Uint16Array(v2);
// v5 = .object(ofGroup: Uint16Array, withProperties: ["__proto__", "buffer", "byteLength", "byteOffset", "constructor", "length"], withMethods: ["set", "filter", "some", "sort", "reduce", "lastIndexOf", "fill", "indexOf", "slice", "keys", "reverse", "every", "includes", "values", "entries", "findIndex", "subarray", "reduceRight", "map", "copyWithin", "find", "join", "forEach"])
v5.constructor = Int32Array;
const v7 = v5.slice(Int32Array,1000);
// v7 = .object(ofGroup: Uint16Array, withProperties: ["buffer", "__proto__", "byteOffset", "byteLength", "length", "constructor"], withMethods: ["some", "slice", "values", "filter", "subarray", "forEach", "join", "includes", "lastIndexOf", "find", "map", "keys", "indexOf", "sort", "findIndex", "reverse", "copyWithin", "every", "entries", "reduce", "reduceRight", "fill", "set"])
}
%NeverOptimizeFunction(main);
main();
