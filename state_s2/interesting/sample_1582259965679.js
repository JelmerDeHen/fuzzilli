function main() {
const v2 = new Uint8ClampedArray(2);
// v2 = .object(ofGroup: Uint8ClampedArray, withProperties: ["byteLength", "__proto__", "byteOffset", "constructor", "length", "buffer"], withMethods: ["entries", "every", "lastIndexOf", "values", "reverse", "map", "copyWithin", "subarray", "reduce", "filter", "sort", "find", "keys", "reduceRight", "join", "forEach", "fill", "set", "indexOf", "some", "includes", "findIndex", "slice"])
const v5 = v2.fill(-2,8);
// v5 = .undefined
}
%NeverOptimizeFunction(main);
main();
