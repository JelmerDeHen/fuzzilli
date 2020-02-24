function main() {
const v5 = new Uint8ClampedArray(1337);
// v5 = .object(ofGroup: Uint8ClampedArray, withProperties: ["buffer", "length", "byteLength", "constructor", "__proto__", "byteOffset"], withMethods: ["join", "values", "reduceRight", "find", "reverse", "fill", "indexOf", "entries", "forEach", "subarray", "findIndex", "every", "set", "reduce", "slice", "filter", "copyWithin", "keys", "lastIndexOf", "sort", "map", "some", "includes"])
v5.constructor = Float64Array;
const v8 = v5.slice(8,-1);
// v8 = .object(ofGroup: Uint8ClampedArray, withProperties: ["byteOffset", "byteLength", "buffer", "constructor", "__proto__", "length"], withMethods: ["join", "copyWithin", "find", "fill", "forEach", "map", "subarray", "values", "entries", "every", "set", "reverse", "sort", "some", "reduceRight", "keys", "slice", "filter", "reduce", "indexOf", "includes", "findIndex", "lastIndexOf"])
}
%NeverOptimizeFunction(main);
main();
