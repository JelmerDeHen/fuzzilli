function main() {
const v5 = new Uint8ClampedArray(1337);
// v5 = .object(ofGroup: Uint8ClampedArray, withProperties: ["length", "constructor", "buffer", "byteOffset", "__proto__", "byteLength"], withMethods: ["fill", "findIndex", "keys", "forEach", "slice", "some", "set", "copyWithin", "values", "join", "find", "entries", "lastIndexOf", "reverse", "includes", "reduceRight", "every", "indexOf", "sort", "filter", "map", "subarray", "reduce"])
v5.constructor = Float64Array;
const v8 = v5.slice(8,-1);
// v8 = .object(ofGroup: Uint8ClampedArray, withProperties: ["constructor", "byteOffset", "byteLength", "buffer", "__proto__", "length"], withMethods: ["some", "join", "subarray", "find", "entries", "slice", "reverse", "keys", "findIndex", "set", "values", "fill", "indexOf", "forEach", "filter", "map", "sort", "every", "copyWithin", "reduce", "reduceRight", "includes", "lastIndexOf"])
}
%NeverOptimizeFunction(main);
main();
