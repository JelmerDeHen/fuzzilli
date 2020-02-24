function main() {
const v2 = [13.37,-65536,13.37];
// v2 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v5 = new Int8Array(v2);
// v5 = .object(ofGroup: Int8Array, withProperties: ["byteLength", "__proto__", "length", "buffer", "byteOffset", "constructor"], withMethods: ["join", "entries", "map", "reduceRight", "find", "lastIndexOf", "keys", "values", "fill", "reverse", "indexOf", "filter", "reduce", "includes", "some", "set", "findIndex", "copyWithin", "every", "subarray", "forEach", "slice", "sort"])
v5.constructor = Float64Array;
const v8 = v5.slice(-268435456,1000);
// v8 = .object(ofGroup: Int8Array, withProperties: ["constructor", "byteOffset", "length", "__proto__", "byteLength", "buffer"], withMethods: ["join", "entries", "reduce", "fill", "reduceRight", "slice", "reverse", "findIndex", "set", "sort", "every", "copyWithin", "includes", "indexOf", "filter", "keys", "subarray", "find", "forEach", "map", "lastIndexOf", "some", "values"])
}
%NeverOptimizeFunction(main);
main();
