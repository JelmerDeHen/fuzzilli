function main() {
let v3 = eval;
const v5 = new Float32Array(1337);
// v5 = .object(ofGroup: Float32Array, withProperties: ["length", "__proto__", "byteOffset", "constructor", "buffer", "byteLength"], withMethods: ["subarray", "values", "reverse", "fill", "keys", "reduceRight", "join", "find", "every", "forEach", "sort", "includes", "set", "slice", "filter", "entries", "copyWithin", "lastIndexOf", "map", "findIndex", "some", "indexOf", "reduce"])
const v6 = v3.apply("boolean",v5);
// v6 = .unknown
}
%NeverOptimizeFunction(main);
main();
