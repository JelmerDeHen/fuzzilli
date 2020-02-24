function main() {
const v3 = new Int32Array(1337);
// v3 = .object(ofGroup: Int32Array, withProperties: ["buffer", "byteOffset", "byteLength", "constructor", "length", "__proto__"], withMethods: ["entries", "copyWithin", "slice", "sort", "reduce", "join", "some", "indexOf", "lastIndexOf", "keys", "find", "forEach", "map", "set", "every", "reduceRight", "fill", "findIndex", "reverse", "includes", "values", "filter", "subarray"])
const v4 = v3.includes(undefined,undefined);
// v4 = .boolean
}
%NeverOptimizeFunction(main);
main();
