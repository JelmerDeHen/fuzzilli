function main() {
let v2 = 0;
const v3 = v2 + 1;
// v3 = .primitive
v2 = v3;
let v6 = 339680996;
const v13 = new Int32Array(128);
// v13 = .object(ofGroup: Int32Array, withProperties: ["__proto__", "constructor", "length", "byteOffset", "byteLength", "buffer"], withMethods: ["sort", "forEach", "filter", "fill", "lastIndexOf", "reduce", "map", "reduceRight", "find", "keys", "every", "set", "join", "values", "subarray", "copyWithin", "slice", "indexOf", "reverse", "entries", "findIndex", "some", "includes"])
v13.constructor = Uint32Array;
const v16 = v13.slice(16,1337);
// v16 = .object(ofGroup: Int32Array, withProperties: ["__proto__", "byteOffset", "buffer", "byteLength", "constructor", "length"], withMethods: ["reverse", "findIndex", "sort", "indexOf", "map", "includes", "set", "subarray", "keys", "forEach", "lastIndexOf", "find", "fill", "slice", "entries", "values", "some", "every", "filter", "join", "copyWithin", "reduce", "reduceRight"])
}
%NeverOptimizeFunction(main);
main();
