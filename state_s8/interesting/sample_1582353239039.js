function main() {
const v4 = new Uint8ClampedArray(126575717);
// v4 = .object(ofGroup: Uint8ClampedArray, withProperties: ["byteOffset", "__proto__", "buffer", "length", "byteLength", "constructor"], withMethods: ["every", "reduce", "indexOf", "reverse", "map", "join", "entries", "reduceRight", "subarray", "includes", "sort", "some", "values", "copyWithin", "filter", "lastIndexOf", "set", "fill", "find", "findIndex", "keys", "forEach", "slice"])
v4.constructor = Float32Array;
const v6 = v4.slice("e",9);
// v6 = .object(ofGroup: Uint8ClampedArray, withProperties: ["length", "constructor", "buffer", "__proto__", "byteLength", "byteOffset"], withMethods: ["some", "reverse", "find", "map", "keys", "findIndex", "filter", "every", "subarray", "indexOf", "join", "reduce", "values", "set", "entries", "forEach", "reduceRight", "slice", "lastIndexOf", "includes", "fill", "copyWithin", "sort"])
}
%NeverOptimizeFunction(main);
main();
