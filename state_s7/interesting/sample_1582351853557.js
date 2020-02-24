function main() {
const v3 = [13.37,gc,-4294967297,-4294967297];
// v3 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v6 = new Int8Array(v3);
// v6 = .object(ofGroup: Int8Array, withProperties: ["byteOffset", "constructor", "buffer", "byteLength", "__proto__", "length"], withMethods: ["values", "copyWithin", "fill", "join", "keys", "sort", "entries", "forEach", "subarray", "some", "map", "reduceRight", "reduce", "lastIndexOf", "filter", "findIndex", "reverse", "every", "set", "includes", "find", "slice", "indexOf"])
v6.constructor = Int32Array;
const v8 = v6.slice(v6,1337);
// v8 = .object(ofGroup: Int8Array, withProperties: ["buffer", "byteOffset", "byteLength", "__proto__", "length", "constructor"], withMethods: ["entries", "reduce", "forEach", "subarray", "some", "copyWithin", "find", "indexOf", "filter", "map", "findIndex", "join", "fill", "sort", "keys", "every", "set", "includes", "reduceRight", "lastIndexOf", "slice", "values", "reverse"])
}
%NeverOptimizeFunction(main);
main();
