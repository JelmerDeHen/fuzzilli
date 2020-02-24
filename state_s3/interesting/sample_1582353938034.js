function main() {
let v1 = Uint32Array;
const v4 = new Int32Array(v1);
// v4 = .object(ofGroup: Int32Array, withProperties: ["__proto__", "constructor", "length", "byteOffset", "byteLength", "buffer"], withMethods: ["sort", "forEach", "filter", "fill", "lastIndexOf", "reduce", "map", "reduceRight", "find", "keys", "every", "set", "join", "values", "subarray", "copyWithin", "slice", "indexOf", "reverse", "entries", "findIndex", "some", "includes"])
v4.constructor = Int8Array;
const v7 = v4.slice(-2076787791,1337);
// v7 = .object(ofGroup: Int32Array, withProperties: ["__proto__", "byteOffset", "buffer", "byteLength", "constructor", "length"], withMethods: ["reverse", "findIndex", "sort", "indexOf", "map", "includes", "set", "subarray", "keys", "forEach", "lastIndexOf", "find", "fill", "slice", "entries", "values", "some", "every", "filter", "join", "copyWithin", "reduce", "reduceRight"])
}
%NeverOptimizeFunction(main);
main();
