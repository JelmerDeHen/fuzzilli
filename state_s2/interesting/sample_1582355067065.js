function main() {
const v3 = new Uint8ClampedArray(1337);
// v3 = .object(ofGroup: Uint8ClampedArray, withProperties: ["byteLength", "__proto__", "byteOffset", "constructor", "length", "buffer"], withMethods: ["entries", "every", "lastIndexOf", "values", "reverse", "map", "copyWithin", "subarray", "reduce", "filter", "sort", "find", "keys", "reduceRight", "join", "forEach", "fill", "set", "indexOf", "some", "includes", "findIndex", "slice"])
v3.constructor = Int8Array;
const v6 = v3.slice(-1024,3103111621);
// v6 = .object(ofGroup: Uint8ClampedArray, withProperties: ["byteOffset", "__proto__", "length", "constructor", "buffer", "byteLength"], withMethods: ["subarray", "reverse", "reduce", "lastIndexOf", "sort", "join", "map", "keys", "find", "entries", "copyWithin", "slice", "forEach", "includes", "indexOf", "every", "set", "some", "values", "reduceRight", "fill", "filter", "findIndex"])
}
%NeverOptimizeFunction(main);
main();
