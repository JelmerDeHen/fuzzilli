function main() {
const v1 = [13.37,13.37,13.37,13.37];
// v1 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v4 = new Uint8Array(v1);
// v4 = .object(ofGroup: Uint8Array, withProperties: ["byteOffset", "length", "constructor", "byteLength", "buffer", "__proto__"], withMethods: ["findIndex", "set", "reduce", "reduceRight", "indexOf", "keys", "subarray", "values", "sort", "lastIndexOf", "forEach", "map", "copyWithin", "entries", "find", "reverse", "includes", "some", "join", "fill", "slice", "filter", "every"])
v4.constructor = Int16Array;
const v6 = v4.slice(v4,1337);
// v6 = .object(ofGroup: Uint8Array, withProperties: ["__proto__", "byteOffset", "byteLength", "constructor", "length", "buffer"], withMethods: ["sort", "set", "map", "reduce", "reverse", "entries", "filter", "subarray", "includes", "find", "join", "values", "copyWithin", "findIndex", "keys", "some", "fill", "forEach", "reduceRight", "slice", "indexOf", "every", "lastIndexOf"])
}
%NeverOptimizeFunction(main);
main();
