function main() {
const v3 = new Uint8ClampedArray(1337);
// v3 = .object(ofGroup: Uint8ClampedArray, withProperties: ["length", "constructor", "byteOffset", "buffer", "byteLength", "__proto__"], withMethods: ["slice", "findIndex", "subarray", "fill", "sort", "forEach", "map", "find", "reverse", "copyWithin", "filter", "every", "reduceRight", "keys", "includes", "entries", "set", "indexOf", "lastIndexOf", "some", "reduce", "join", "values"])
const v4 = new Uint32Array(v3);
// v4 = .object(ofGroup: Uint32Array, withProperties: ["__proto__", "byteLength", "length", "constructor", "byteOffset", "buffer"], withMethods: ["sort", "filter", "forEach", "set", "keys", "subarray", "reduceRight", "includes", "copyWithin", "reverse", "findIndex", "lastIndexOf", "join", "entries", "map", "some", "slice", "fill", "indexOf", "every", "find", "reduce", "values"])
}
%NeverOptimizeFunction(main);
main();
