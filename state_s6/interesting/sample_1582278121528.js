function main() {
const v2 = 2.0 | 2.0;
// v2 = .integer
const v3 = new Uint8Array(v2);
// v3 = .object(ofGroup: Uint8Array, withProperties: ["byteOffset", "length", "constructor", "byteLength", "buffer", "__proto__"], withMethods: ["findIndex", "set", "reduce", "reduceRight", "indexOf", "keys", "subarray", "values", "sort", "lastIndexOf", "forEach", "map", "copyWithin", "entries", "find", "reverse", "includes", "some", "join", "fill", "slice", "filter", "every"])
const v6 = [13.37,13.37,13.37];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v7 = v6[Function];
// v7 = .unknown
const v8 = v3.sort(v7);
// v8 = .undefined
}
%NeverOptimizeFunction(main);
main();
