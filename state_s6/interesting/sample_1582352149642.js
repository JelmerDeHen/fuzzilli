function main() {
const v3 = new Uint8ClampedArray(1337);
// v3 = .object(ofGroup: Uint8ClampedArray, withProperties: ["__proto__", "byteLength", "constructor", "byteOffset", "length", "buffer"], withMethods: ["filter", "forEach", "lastIndexOf", "find", "subarray", "reduce", "indexOf", "join", "entries", "copyWithin", "sort", "slice", "some", "fill", "reverse", "includes", "reduceRight", "values", "keys", "map", "every", "findIndex", "set"])
v3.constructor = Uint16Array;
const v6 = v3.slice(5,234126503);
// v6 = .object(ofGroup: Uint8ClampedArray, withProperties: ["byteOffset", "constructor", "byteLength", "__proto__", "length", "buffer"], withMethods: ["join", "reduce", "keys", "fill", "every", "set", "reduceRight", "values", "find", "reverse", "copyWithin", "filter", "sort", "subarray", "includes", "lastIndexOf", "findIndex", "some", "slice", "entries", "indexOf", "forEach", "map"])
}
%NeverOptimizeFunction(main);
main();