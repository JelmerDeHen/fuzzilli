function main() {
const v3 = [13.37,gc,-4294967297,-4294967297];
// v3 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v6 = new Int8Array(v3);
// v6 = .object(ofGroup: Int8Array, withProperties: ["byteLength", "__proto__", "length", "buffer", "byteOffset", "constructor"], withMethods: ["join", "entries", "map", "reduceRight", "find", "lastIndexOf", "keys", "values", "fill", "reverse", "indexOf", "filter", "reduce", "includes", "some", "set", "findIndex", "copyWithin", "every", "subarray", "forEach", "slice", "sort"])
v6.constructor = Int32Array;
const v8 = v6.slice(v6,1337);
// v8 = .object(ofGroup: Int8Array, withProperties: ["constructor", "byteOffset", "length", "__proto__", "byteLength", "buffer"], withMethods: ["join", "entries", "reduce", "fill", "reduceRight", "slice", "reverse", "findIndex", "set", "sort", "every", "copyWithin", "includes", "indexOf", "filter", "keys", "subarray", "find", "forEach", "map", "lastIndexOf", "some", "values"])
}
%NeverOptimizeFunction(main);
main();
