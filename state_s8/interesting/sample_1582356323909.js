function main() {
const v2 = [1337,1337,1337,1337];
// v2 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
let v3 = v2;
const v6 = new Uint8ClampedArray(v3);
// v6 = .object(ofGroup: Uint8ClampedArray, withProperties: ["byteOffset", "__proto__", "buffer", "length", "byteLength", "constructor"], withMethods: ["every", "reduce", "indexOf", "reverse", "map", "join", "entries", "reduceRight", "subarray", "includes", "sort", "some", "values", "copyWithin", "filter", "lastIndexOf", "set", "fill", "find", "findIndex", "keys", "forEach", "slice"])
v6.constructor = Int8Array;
const v8 = v6.slice(RegExp,3103111621);
// v8 = .object(ofGroup: Uint8ClampedArray, withProperties: ["length", "constructor", "buffer", "__proto__", "byteLength", "byteOffset"], withMethods: ["some", "reverse", "find", "map", "keys", "findIndex", "filter", "every", "subarray", "indexOf", "join", "reduce", "values", "set", "entries", "forEach", "reduceRight", "slice", "lastIndexOf", "includes", "fill", "copyWithin", "sort"])
}
%NeverOptimizeFunction(main);
main();
