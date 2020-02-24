function main() {
const v1 = {constructor:1337};
// v1 = .object(ofGroup: Object, withProperties: ["constructor", "__proto__"])
const v3 = new Uint32Array(v1);
// v3 = .object(ofGroup: Uint32Array, withProperties: ["__proto__", "buffer", "constructor", "byteOffset", "length", "byteLength"], withMethods: ["reduceRight", "slice", "filter", "fill", "keys", "reverse", "indexOf", "reduce", "lastIndexOf", "includes", "find", "copyWithin", "map", "forEach", "some", "join", "subarray", "values", "every", "entries", "set", "findIndex", "sort"])
const v4 = v3.reverse();
// v4 = .undefined
}
%NeverOptimizeFunction(main);
main();
