function main() {
const v1 = {constructor:1337};
// v1 = .object(ofGroup: Object, withProperties: ["constructor", "__proto__"])
const v3 = new Uint32Array(v1);
// v3 = .object(ofGroup: Uint32Array, withProperties: ["__proto__", "byteLength", "length", "constructor", "byteOffset", "buffer"], withMethods: ["sort", "filter", "forEach", "set", "keys", "subarray", "reduceRight", "includes", "copyWithin", "reverse", "findIndex", "lastIndexOf", "join", "entries", "map", "some", "slice", "fill", "indexOf", "every", "find", "reduce", "values"])
const v4 = v3.reverse();
// v4 = .undefined
}
%NeverOptimizeFunction(main);
main();
