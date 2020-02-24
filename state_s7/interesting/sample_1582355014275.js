function main() {
const v4 = [13.37,13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v10 = new Float64Array(128);
// v10 = .object(ofGroup: Float64Array, withProperties: ["byteOffset", "length", "buffer", "byteLength", "constructor", "__proto__"], withMethods: ["lastIndexOf", "forEach", "find", "indexOf", "copyWithin", "filter", "every", "some", "reduceRight", "join", "values", "reduce", "includes", "reverse", "entries", "slice", "map", "sort", "set", "keys", "subarray", "findIndex", "fill"])
v10.constructor = Int8Array;
const v13 = v10.slice(16,1337);
// v13 = .object(ofGroup: Float64Array, withProperties: ["buffer", "byteOffset", "length", "constructor", "byteLength", "__proto__"], withMethods: ["filter", "values", "reduceRight", "includes", "forEach", "fill", "indexOf", "find", "findIndex", "subarray", "reduce", "copyWithin", "sort", "map", "slice", "set", "keys", "entries", "every", "reverse", "some", "lastIndexOf", "join"])
}
%NeverOptimizeFunction(main);
main();
