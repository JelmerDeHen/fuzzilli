function main() {
let v3 = eval;
const v5 = new Float32Array(1337);
// v5 = .object(ofGroup: Float32Array, withProperties: ["byteOffset", "byteLength", "length", "constructor", "buffer", "__proto__"], withMethods: ["slice", "entries", "some", "set", "indexOf", "join", "includes", "map", "lastIndexOf", "keys", "forEach", "reduce", "fill", "findIndex", "reduceRight", "find", "subarray", "copyWithin", "reverse", "sort", "filter", "every", "values"])
const v6 = v3.apply("boolean",v5);
// v6 = .unknown
}
%NeverOptimizeFunction(main);
main();
