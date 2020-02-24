function main() {
let v3 = eval;
const v5 = new Float32Array(1337);
// v5 = .object(ofGroup: Float32Array, withProperties: ["byteLength", "length", "__proto__", "buffer", "constructor", "byteOffset"], withMethods: ["includes", "forEach", "findIndex", "lastIndexOf", "reduce", "filter", "some", "entries", "map", "slice", "every", "reverse", "keys", "reduceRight", "copyWithin", "set", "fill", "subarray", "join", "values", "sort", "indexOf", "find"])
const v6 = v3.apply("boolean",v5);
// v6 = .unknown
}
%NeverOptimizeFunction(main);
main();
