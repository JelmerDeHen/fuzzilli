function main() {
const v3 = new Uint8ClampedArray(1337);
// v3 = .object(ofGroup: Uint8ClampedArray, withProperties: ["buffer", "length", "byteLength", "constructor", "__proto__", "byteOffset"], withMethods: ["join", "values", "reduceRight", "find", "reverse", "fill", "indexOf", "entries", "forEach", "subarray", "findIndex", "every", "set", "reduce", "slice", "filter", "copyWithin", "keys", "lastIndexOf", "sort", "map", "some", "includes"])
v3.constructor = Uint8Array;
const v6 = v3.slice(-1024,234126503);
// v6 = .object(ofGroup: Uint8ClampedArray, withProperties: ["byteOffset", "byteLength", "buffer", "constructor", "__proto__", "length"], withMethods: ["join", "copyWithin", "find", "fill", "forEach", "map", "subarray", "values", "entries", "every", "set", "reverse", "sort", "some", "reduceRight", "keys", "slice", "filter", "reduce", "indexOf", "includes", "findIndex", "lastIndexOf"])
}
%NeverOptimizeFunction(main);
main();
