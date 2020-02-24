function main() {
const v2 = ["matchAll",1337,1337,1337];
// v2 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v6 = new Int16Array(v2);
// v6 = .object(ofGroup: Int16Array, withProperties: ["length", "byteLength", "__proto__", "byteOffset", "constructor", "buffer"], withMethods: ["lastIndexOf", "fill", "join", "reduce", "some", "findIndex", "entries", "map", "slice", "reverse", "sort", "set", "indexOf", "find", "copyWithin", "subarray", "includes", "values", "keys", "filter", "forEach", "every", "reduceRight"])
v6.constructor = Int32Array;
const v8 = v6.slice(isFinite,234126503);
// v8 = .object(ofGroup: Int16Array, withProperties: ["length", "byteOffset", "constructor", "__proto__", "buffer", "byteLength"], withMethods: ["keys", "entries", "filter", "findIndex", "every", "sort", "join", "copyWithin", "lastIndexOf", "find", "slice", "reduceRight", "some", "reverse", "map", "set", "reduce", "forEach", "values", "fill", "indexOf", "subarray", "includes"])
}
%NeverOptimizeFunction(main);
main();
