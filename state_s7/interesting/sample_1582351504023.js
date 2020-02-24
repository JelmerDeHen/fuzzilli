function main() {
let v2 = 0;
const v3 = v2 + 1;
// v3 = .primitive
v2 = v3;
let v6 = 339680996;
const v13 = new Int32Array(128);
// v13 = .object(ofGroup: Int32Array, withProperties: ["__proto__", "constructor", "length", "byteOffset", "byteLength", "buffer"], withMethods: ["set", "values", "filter", "reverse", "findIndex", "join", "find", "copyWithin", "sort", "includes", "indexOf", "forEach", "every", "subarray", "reduce", "some", "lastIndexOf", "fill", "keys", "slice", "map", "reduceRight", "entries"])
v13.constructor = Uint32Array;
const v16 = v13.slice(16,1337);
// v16 = .object(ofGroup: Int32Array, withProperties: ["byteOffset", "length", "constructor", "__proto__", "byteLength", "buffer"], withMethods: ["slice", "findIndex", "sort", "keys", "entries", "map", "set", "copyWithin", "some", "indexOf", "subarray", "every", "reverse", "join", "lastIndexOf", "values", "forEach", "filter", "fill", "includes", "reduce", "find", "reduceRight"])
}
%NeverOptimizeFunction(main);
main();
