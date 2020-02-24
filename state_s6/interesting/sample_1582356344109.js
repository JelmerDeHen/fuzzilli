function main() {
const v2 = [1337,1337,1337,1337];
// v2 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
let v3 = v2;
const v6 = new Uint8ClampedArray(v3);
// v6 = .object(ofGroup: Uint8ClampedArray, withProperties: ["__proto__", "byteLength", "constructor", "byteOffset", "length", "buffer"], withMethods: ["filter", "forEach", "lastIndexOf", "find", "subarray", "reduce", "indexOf", "join", "entries", "copyWithin", "sort", "slice", "some", "fill", "reverse", "includes", "reduceRight", "values", "keys", "map", "every", "findIndex", "set"])
v6.constructor = Int8Array;
const v8 = v6.slice(RegExp,3103111621);
// v8 = .object(ofGroup: Uint8ClampedArray, withProperties: ["byteOffset", "constructor", "byteLength", "__proto__", "length", "buffer"], withMethods: ["join", "reduce", "keys", "fill", "every", "set", "reduceRight", "values", "find", "reverse", "copyWithin", "filter", "sort", "subarray", "includes", "lastIndexOf", "findIndex", "some", "slice", "entries", "indexOf", "forEach", "map"])
}
%NeverOptimizeFunction(main);
main();
