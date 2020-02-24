function main() {
const v1 = {};
// v1 = .object(ofGroup: Object, withProperties: ["__proto__"])
const v2 = new Uint8ClampedArray(v1);
// v2 = .object(ofGroup: Uint8ClampedArray, withProperties: ["constructor", "byteLength", "__proto__", "buffer", "length", "byteOffset"], withMethods: ["slice", "reduceRight", "findIndex", "every", "copyWithin", "set", "fill", "sort", "forEach", "entries", "join", "values", "keys", "map", "reverse", "indexOf", "subarray", "reduce", "find", "includes", "lastIndexOf", "filter", "some"])
const v3 = v2.reverse();
// v3 = .undefined
}
%NeverOptimizeFunction(main);
main();
