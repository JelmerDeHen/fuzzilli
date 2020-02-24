function main() {
const v4 = [13.37,13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v10 = new Float64Array(128);
// v10 = .object(ofGroup: Float64Array, withProperties: ["byteLength", "constructor", "length", "__proto__", "buffer", "byteOffset"], withMethods: ["filter", "set", "every", "join", "copyWithin", "reverse", "slice", "keys", "fill", "sort", "indexOf", "some", "subarray", "reduce", "reduceRight", "map", "values", "includes", "forEach", "lastIndexOf", "entries", "findIndex", "find"])
v10.constructor = Int8Array;
const v13 = v10.slice(16,1337);
// v13 = .object(ofGroup: Float64Array, withProperties: ["__proto__", "length", "byteLength", "buffer", "constructor", "byteOffset"], withMethods: ["every", "reduce", "lastIndexOf", "findIndex", "reverse", "includes", "forEach", "some", "join", "find", "indexOf", "set", "reduceRight", "slice", "values", "filter", "map", "copyWithin", "fill", "keys", "entries", "subarray", "sort"])
}
%NeverOptimizeFunction(main);
main();
