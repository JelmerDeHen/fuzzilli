function main() {
const v1 = {constructor:1337};
// v1 = .object(ofGroup: Object, withProperties: ["__proto__", "constructor"])
const v3 = new Uint32Array(v1);
// v3 = .object(ofGroup: Uint32Array, withProperties: ["buffer", "byteOffset", "__proto__", "constructor", "byteLength", "length"], withMethods: ["entries", "keys", "map", "every", "set", "reduce", "includes", "reduceRight", "lastIndexOf", "some", "findIndex", "find", "subarray", "filter", "join", "values", "reverse", "copyWithin", "indexOf", "forEach", "sort", "fill", "slice"])
const v4 = v3.reverse();
// v4 = .undefined
}
%NeverOptimizeFunction(main);
main();
