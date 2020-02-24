function main() {
const v1 = (4096).__proto__;
// v1 = .unknown
const v4 = new Uint16Array(6139);
// v4 = .object(ofGroup: Uint16Array, withProperties: ["length", "byteLength", "__proto__", "buffer", "constructor", "byteOffset"], withMethods: ["fill", "findIndex", "filter", "entries", "map", "find", "sort", "every", "reduce", "join", "set", "copyWithin", "subarray", "reverse", "some", "indexOf", "includes", "reduceRight", "lastIndexOf", "values", "slice", "keys", "forEach"])
const v5 = v4[2147483649];
// v5 = .unknown
}
%NeverOptimizeFunction(main);
main();
