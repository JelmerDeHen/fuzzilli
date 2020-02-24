function main() {
const v3 = [13.37,gc,-4294967297,-4294967297];
// v3 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v6 = new Int8Array(v3);
// v6 = .object(ofGroup: Int8Array, withProperties: ["constructor", "__proto__", "buffer", "length", "byteOffset", "byteLength"], withMethods: ["values", "every", "reverse", "reduce", "lastIndexOf", "slice", "sort", "fill", "indexOf", "copyWithin", "set", "some", "subarray", "filter", "reduceRight", "forEach", "find", "join", "includes", "findIndex", "keys", "entries", "map"])
v6.constructor = Int32Array;
const v8 = v6.slice(v6,1337);
// v8 = .object(ofGroup: Int8Array, withProperties: ["byteLength", "__proto__", "buffer", "constructor", "length", "byteOffset"], withMethods: ["every", "slice", "reverse", "values", "filter", "findIndex", "reduceRight", "includes", "subarray", "fill", "reduce", "find", "sort", "map", "entries", "keys", "set", "indexOf", "copyWithin", "some", "forEach", "join", "lastIndexOf"])
}
%NeverOptimizeFunction(main);
main();
