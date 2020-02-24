function main() {
let v3 = eval;
const v5 = new Float32Array(1337);
// v5 = .object(ofGroup: Float32Array, withProperties: ["length", "constructor", "buffer", "__proto__", "byteLength", "byteOffset"], withMethods: ["slice", "some", "findIndex", "reduce", "copyWithin", "reverse", "find", "sort", "indexOf", "filter", "keys", "map", "every", "reduceRight", "lastIndexOf", "fill", "set", "forEach", "subarray", "entries", "values", "includes", "join"])
const v6 = v3.apply("boolean",v5);
// v6 = .unknown
}
%NeverOptimizeFunction(main);
main();
