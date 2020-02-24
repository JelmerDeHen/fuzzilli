function main() {
const v2 = [1337,1337];
// v2 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v3 = [".zFvkNhsxN",v2];
// v3 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
let v4 = v3;
const v7 = new Uint8ClampedArray(v4);
// v7 = .object(ofGroup: Uint8ClampedArray, withProperties: ["buffer", "length", "byteLength", "constructor", "__proto__", "byteOffset"], withMethods: ["join", "values", "reduceRight", "find", "reverse", "fill", "indexOf", "entries", "forEach", "subarray", "findIndex", "every", "set", "reduce", "slice", "filter", "copyWithin", "keys", "lastIndexOf", "sort", "map", "some", "includes"])
v7.constructor = Int16Array;
const v10 = v7.slice(-268435456,234126503);
// v10 = .object(ofGroup: Uint8ClampedArray, withProperties: ["byteOffset", "byteLength", "buffer", "constructor", "__proto__", "length"], withMethods: ["join", "copyWithin", "find", "fill", "forEach", "map", "subarray", "values", "entries", "every", "set", "reverse", "sort", "some", "reduceRight", "keys", "slice", "filter", "reduce", "indexOf", "includes", "findIndex", "lastIndexOf"])
}
%NeverOptimizeFunction(main);
main();
