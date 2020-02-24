function main() {
const v4 = new Uint8ClampedArray(126575717);
// v4 = .object(ofGroup: Uint8ClampedArray, withProperties: ["buffer", "constructor", "byteLength", "length", "__proto__", "byteOffset"], withMethods: ["forEach", "map", "lastIndexOf", "every", "slice", "values", "subarray", "join", "fill", "filter", "copyWithin", "sort", "some", "reduceRight", "entries", "set", "findIndex", "reverse", "reduce", "find", "includes", "indexOf", "keys"])
v4.constructor = Float32Array;
const v6 = v4.slice("e",9);
// v6 = .object(ofGroup: Uint8ClampedArray, withProperties: ["byteOffset", "buffer", "byteLength", "__proto__", "constructor", "length"], withMethods: ["fill", "reverse", "indexOf", "forEach", "reduceRight", "values", "findIndex", "sort", "filter", "every", "reduce", "lastIndexOf", "keys", "subarray", "includes", "copyWithin", "entries", "map", "set", "some", "join", "find", "slice"])
}
%NeverOptimizeFunction(main);
main();
