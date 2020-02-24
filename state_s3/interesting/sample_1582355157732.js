function main() {
const v5 = new Uint8ClampedArray(1337);
// v5 = .object(ofGroup: Uint8ClampedArray, withProperties: ["length", "constructor", "byteOffset", "buffer", "byteLength", "__proto__"], withMethods: ["slice", "findIndex", "subarray", "fill", "sort", "forEach", "map", "find", "reverse", "copyWithin", "filter", "every", "reduceRight", "keys", "includes", "entries", "set", "indexOf", "lastIndexOf", "some", "reduce", "join", "values"])
v5.constructor = Float64Array;
const v8 = v5.slice(8,-1);
// v8 = .object(ofGroup: Uint8ClampedArray, withProperties: ["length", "constructor", "buffer", "byteOffset", "byteLength", "__proto__"], withMethods: ["reverse", "join", "filter", "findIndex", "includes", "indexOf", "forEach", "some", "find", "reduceRight", "lastIndexOf", "subarray", "keys", "slice", "every", "reduce", "values", "map", "sort", "fill", "copyWithin", "entries", "set"])
}
%NeverOptimizeFunction(main);
main();
