function main() {
let v3 = eval;
const v5 = new Float32Array(1337);
// v5 = .object(ofGroup: Float32Array, withProperties: ["__proto__", "buffer", "constructor", "length", "byteLength", "byteOffset"], withMethods: ["sort", "some", "indexOf", "find", "subarray", "set", "reverse", "reduce", "join", "values", "keys", "entries", "map", "copyWithin", "includes", "findIndex", "slice", "reduceRight", "lastIndexOf", "filter", "every", "fill", "forEach"])
const v6 = v3.apply("boolean",v5);
// v6 = .unknown
}
%NeverOptimizeFunction(main);
main();
