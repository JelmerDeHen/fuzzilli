function main() {
const v3 = new Uint8ClampedArray(128);
// v3 = .object(ofGroup: Uint8ClampedArray, withProperties: ["length", "constructor", "buffer", "byteOffset", "__proto__", "byteLength"], withMethods: ["fill", "findIndex", "keys", "forEach", "slice", "some", "set", "copyWithin", "values", "join", "find", "entries", "lastIndexOf", "reverse", "includes", "reduceRight", "every", "indexOf", "sort", "filter", "map", "subarray", "reduce"])
v3.constructor = Int16Array;
const v6 = v3.slice(16,1337);
// v6 = .object(ofGroup: Uint8ClampedArray, withProperties: ["constructor", "byteOffset", "byteLength", "buffer", "__proto__", "length"], withMethods: ["some", "join", "subarray", "find", "entries", "slice", "reverse", "keys", "findIndex", "set", "values", "fill", "indexOf", "forEach", "filter", "map", "sort", "every", "copyWithin", "reduce", "reduceRight", "includes", "lastIndexOf"])
}
%NeverOptimizeFunction(main);
main();
