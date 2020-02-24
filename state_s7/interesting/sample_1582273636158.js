function main() {
const v1 = {constructor:1337};
// v1 = .object(ofGroup: Object, withProperties: ["__proto__", "constructor"])
const v3 = new Uint32Array(v1);
// v3 = .object(ofGroup: Uint32Array, withProperties: ["length", "buffer", "byteOffset", "byteLength", "__proto__", "constructor"], withMethods: ["includes", "reduceRight", "slice", "indexOf", "every", "reduce", "reverse", "map", "some", "sort", "values", "fill", "copyWithin", "subarray", "join", "find", "forEach", "lastIndexOf", "entries", "filter", "set", "keys", "findIndex"])
const v4 = v3.reverse();
// v4 = .undefined
}
%NeverOptimizeFunction(main);
main();
