function main() {
const v3 = new Uint8ClampedArray(128);
// v3 = .object(ofGroup: Uint8ClampedArray, withProperties: ["__proto__", "buffer", "length", "constructor", "byteOffset", "byteLength"], withMethods: ["copyWithin", "keys", "entries", "indexOf", "find", "subarray", "values", "sort", "some", "reduce", "filter", "slice", "every", "join", "fill", "map", "set", "reduceRight", "reverse", "forEach", "lastIndexOf", "findIndex", "includes"])
v3.constructor = Int16Array;
const v6 = v3.slice(-2788171714,1337);
// v6 = .object(ofGroup: Uint8ClampedArray, withProperties: ["buffer", "__proto__", "byteLength", "length", "byteOffset", "constructor"], withMethods: ["map", "subarray", "forEach", "reduceRight", "join", "copyWithin", "findIndex", "entries", "every", "values", "find", "reduce", "some", "lastIndexOf", "reverse", "filter", "fill", "keys", "set", "sort", "includes", "indexOf", "slice"])
}
%NeverOptimizeFunction(main);
main();