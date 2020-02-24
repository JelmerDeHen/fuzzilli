function main() {
let v2 = 0;
const v3 = v2 + 1;
// v3 = .primitive
v2 = v3;
let v6 = 339680996;
const v13 = new Int32Array(128);
// v13 = .object(ofGroup: Int32Array, withProperties: ["length", "__proto__", "constructor", "buffer", "byteOffset", "byteLength"], withMethods: ["map", "copyWithin", "forEach", "subarray", "entries", "find", "reduceRight", "set", "filter", "keys", "indexOf", "some", "slice", "reverse", "values", "reduce", "findIndex", "includes", "sort", "fill", "every", "lastIndexOf", "join"])
v13.constructor = Uint32Array;
const v16 = v13.slice(16,1337);
// v16 = .object(ofGroup: Int32Array, withProperties: ["buffer", "byteLength", "byteOffset", "length", "__proto__", "constructor"], withMethods: ["find", "forEach", "entries", "subarray", "reduce", "fill", "set", "lastIndexOf", "every", "slice", "findIndex", "some", "join", "reverse", "indexOf", "keys", "filter", "copyWithin", "sort", "reduceRight", "map", "includes", "values"])
}
%NeverOptimizeFunction(main);
main();
