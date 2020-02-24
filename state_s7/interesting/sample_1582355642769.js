function main() {
const v2 = [1337,1337];
// v2 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v3 = [".zFvkNhsxN",v2];
// v3 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
let v4 = v3;
const v7 = new Uint8ClampedArray(v4);
// v7 = .object(ofGroup: Uint8ClampedArray, withProperties: ["__proto__", "buffer", "length", "constructor", "byteOffset", "byteLength"], withMethods: ["copyWithin", "keys", "entries", "indexOf", "find", "subarray", "values", "sort", "some", "reduce", "filter", "slice", "every", "join", "fill", "map", "set", "reduceRight", "reverse", "forEach", "lastIndexOf", "findIndex", "includes"])
v7.constructor = Int16Array;
const v10 = v7.slice(-268435456,234126503);
// v10 = .object(ofGroup: Uint8ClampedArray, withProperties: ["buffer", "__proto__", "byteLength", "length", "byteOffset", "constructor"], withMethods: ["map", "subarray", "forEach", "reduceRight", "join", "copyWithin", "findIndex", "entries", "every", "values", "find", "reduce", "some", "lastIndexOf", "reverse", "filter", "fill", "keys", "set", "sort", "includes", "indexOf", "slice"])
}
%NeverOptimizeFunction(main);
main();
