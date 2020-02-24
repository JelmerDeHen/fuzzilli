function main() {
const v2 = new Uint8ClampedArray(2);
// v2 = .object(ofGroup: Uint8ClampedArray, withProperties: ["length", "constructor", "byteOffset", "buffer", "byteLength", "__proto__"], withMethods: ["slice", "findIndex", "subarray", "fill", "sort", "forEach", "map", "find", "reverse", "copyWithin", "filter", "every", "reduceRight", "keys", "includes", "entries", "set", "indexOf", "lastIndexOf", "some", "reduce", "join", "values"])
const v5 = v2.fill(-2,8);
// v5 = .undefined
}
%NeverOptimizeFunction(main);
main();
