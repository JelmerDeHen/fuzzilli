function main() {
const v3 = new Uint8ClampedArray(7);
// v3 = .object(ofGroup: Uint8ClampedArray, withProperties: ["length", "constructor", "byteOffset", "buffer", "byteLength", "__proto__"], withMethods: ["slice", "findIndex", "subarray", "fill", "sort", "forEach", "map", "find", "reverse", "copyWithin", "filter", "every", "reduceRight", "keys", "includes", "entries", "set", "indexOf", "lastIndexOf", "some", "reduce", "join", "values"])
v3.constructor = Float32Array;
const v6 = v3.slice(-1024,2608792922);
// v6 = .object(ofGroup: Uint8ClampedArray, withProperties: ["length", "constructor", "buffer", "byteOffset", "byteLength", "__proto__"], withMethods: ["reverse", "join", "filter", "findIndex", "includes", "indexOf", "forEach", "some", "find", "reduceRight", "lastIndexOf", "subarray", "keys", "slice", "every", "reduce", "values", "map", "sort", "fill", "copyWithin", "entries", "set"])
}
%NeverOptimizeFunction(main);
main();