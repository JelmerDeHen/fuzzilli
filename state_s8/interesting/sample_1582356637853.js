function main() {
const v2 = ["matchAll",1337,1337,1337];
// v2 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v6 = new Uint8Array(v2);
// v6 = .object(ofGroup: Uint8Array, withProperties: ["length", "byteLength", "buffer", "__proto__", "byteOffset", "constructor"], withMethods: ["fill", "slice", "findIndex", "reverse", "indexOf", "filter", "map", "copyWithin", "set", "find", "keys", "forEach", "subarray", "every", "reduce", "entries", "join", "lastIndexOf", "values", "sort", "some", "reduceRight", "includes"])
v6.constructor = Int32Array;
const v8 = v6.slice(isFinite,234126503);
// v8 = .object(ofGroup: Uint8Array, withProperties: ["constructor", "byteOffset", "__proto__", "buffer", "byteLength", "length"], withMethods: ["reduceRight", "subarray", "lastIndexOf", "values", "fill", "map", "reverse", "slice", "indexOf", "filter", "every", "some", "find", "forEach", "join", "findIndex", "keys", "copyWithin", "sort", "includes", "reduce", "entries", "set"])
}
%NeverOptimizeFunction(main);
main();
