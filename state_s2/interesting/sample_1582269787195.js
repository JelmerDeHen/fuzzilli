function main() {
const v4 = new Int32Array(1);
// v4 = .object(ofGroup: Int32Array, withProperties: ["buffer", "byteOffset", "byteLength", "constructor", "length", "__proto__"], withMethods: ["entries", "copyWithin", "slice", "sort", "reduce", "join", "some", "indexOf", "lastIndexOf", "keys", "find", "forEach", "map", "set", "every", "reduceRight", "fill", "findIndex", "reverse", "includes", "values", "filter", "subarray"])
const v5 = new Float32Array(v4);
// v5 = .object(ofGroup: Float32Array, withProperties: ["byteLength", "length", "__proto__", "buffer", "constructor", "byteOffset"], withMethods: ["includes", "forEach", "findIndex", "lastIndexOf", "reduce", "filter", "some", "entries", "map", "slice", "every", "reverse", "keys", "reduceRight", "copyWithin", "set", "fill", "subarray", "join", "values", "sort", "indexOf", "find"])
const v6 = v5.fill(undefined,undefined);
// v6 = .undefined
}
%NeverOptimizeFunction(main);
main();
