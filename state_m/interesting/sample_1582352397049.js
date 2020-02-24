function main() {
const v1 = [13.37];
// v1 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v5 = new Int32Array(128);
// v5 = .object(ofGroup: Int32Array, withProperties: ["buffer", "length", "byteLength", "__proto__", "byteOffset", "constructor"], withMethods: ["indexOf", "some", "lastIndexOf", "reduceRight", "findIndex", "copyWithin", "forEach", "set", "fill", "filter", "join", "values", "reverse", "map", "subarray", "keys", "slice", "includes", "find", "entries", "sort", "every", "reduce"])
v5.constructor = Float32Array;
const v7 = v5.slice(v1,1337);
// v7 = .object(ofGroup: Int32Array, withProperties: ["constructor", "buffer", "byteOffset", "length", "byteLength", "__proto__"], withMethods: ["keys", "entries", "find", "fill", "filter", "set", "forEach", "map", "some", "subarray", "findIndex", "reduceRight", "values", "sort", "includes", "copyWithin", "indexOf", "every", "reduce", "reverse", "slice", "join", "lastIndexOf"])
}
%NeverOptimizeFunction(main);
main();
