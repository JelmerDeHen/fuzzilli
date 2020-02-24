function main() {
const v5 = new Uint8ClampedArray(1337);
// v5 = .object(ofGroup: Uint8ClampedArray, withProperties: ["byteLength", "__proto__", "byteOffset", "constructor", "length", "buffer"], withMethods: ["entries", "every", "lastIndexOf", "values", "reverse", "map", "copyWithin", "subarray", "reduce", "filter", "sort", "find", "keys", "reduceRight", "join", "forEach", "fill", "set", "indexOf", "some", "includes", "findIndex", "slice"])
v5.constructor = Float64Array;
const v8 = v5.slice(8,-1);
// v8 = .object(ofGroup: Uint8ClampedArray, withProperties: ["byteOffset", "__proto__", "length", "constructor", "buffer", "byteLength"], withMethods: ["subarray", "reverse", "reduce", "lastIndexOf", "sort", "join", "map", "keys", "find", "entries", "copyWithin", "slice", "forEach", "includes", "indexOf", "every", "set", "some", "values", "reduceRight", "fill", "filter", "findIndex"])
}
%NeverOptimizeFunction(main);
main();
