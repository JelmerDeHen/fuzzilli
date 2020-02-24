function main() {
const v3 = [13.37,gc,-4294967297,-4294967297];
// v3 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v6 = new Int8Array(v3);
// v6 = .object(ofGroup: Int8Array, withProperties: ["constructor", "__proto__", "byteOffset", "byteLength", "length", "buffer"], withMethods: ["reduce", "reverse", "values", "every", "some", "reduceRight", "join", "sort", "entries", "keys", "forEach", "filter", "copyWithin", "subarray", "lastIndexOf", "fill", "find", "slice", "findIndex", "includes", "indexOf", "set", "map"])
v6.constructor = Int32Array;
const v8 = v6.slice(v6,1337);
// v8 = .object(ofGroup: Int8Array, withProperties: ["byteOffset", "byteLength", "constructor", "__proto__", "length", "buffer"], withMethods: ["reverse", "fill", "includes", "reduceRight", "sort", "find", "filter", "lastIndexOf", "slice", "forEach", "reduce", "keys", "values", "indexOf", "some", "subarray", "copyWithin", "every", "join", "map", "findIndex", "entries", "set"])
}
%NeverOptimizeFunction(main);
main();
