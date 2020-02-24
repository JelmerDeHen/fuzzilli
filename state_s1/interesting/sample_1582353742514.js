function main() {
const v2 = ["matchAll",1337,1337,1337];
// v2 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v6 = new Int16Array(v2);
// v6 = .object(ofGroup: Int16Array, withProperties: ["constructor", "buffer", "byteLength", "__proto__", "byteOffset", "length"], withMethods: ["lastIndexOf", "reduceRight", "every", "reduce", "copyWithin", "findIndex", "reverse", "sort", "map", "some", "join", "find", "filter", "subarray", "values", "indexOf", "keys", "fill", "includes", "slice", "set", "forEach", "entries"])
v6.constructor = Int32Array;
const v8 = v6.slice(isFinite,234126503);
// v8 = .object(ofGroup: Int16Array, withProperties: ["buffer", "__proto__", "byteLength", "constructor", "length", "byteOffset"], withMethods: ["reduce", "fill", "subarray", "find", "keys", "filter", "some", "indexOf", "join", "findIndex", "entries", "slice", "reverse", "copyWithin", "sort", "includes", "map", "every", "lastIndexOf", "values", "reduceRight", "forEach", "set"])
}
%NeverOptimizeFunction(main);
main();
