function main() {
let v2 = 0;
const v3 = v2 + 1;
// v3 = .primitive
v2 = v3;
let v6 = 339680996;
const v13 = new Int32Array(128);
// v13 = .object(ofGroup: Int32Array, withProperties: ["buffer", "byteOffset", "byteLength", "constructor", "length", "__proto__"], withMethods: ["entries", "copyWithin", "slice", "sort", "reduce", "join", "some", "indexOf", "lastIndexOf", "keys", "find", "forEach", "map", "set", "every", "reduceRight", "fill", "findIndex", "reverse", "includes", "values", "filter", "subarray"])
v13.constructor = Uint32Array;
const v16 = v13.slice(16,1337);
// v16 = .object(ofGroup: Int32Array, withProperties: ["__proto__", "length", "byteOffset", "constructor", "buffer", "byteLength"], withMethods: ["forEach", "some", "lastIndexOf", "values", "join", "subarray", "reduce", "reduceRight", "reverse", "sort", "keys", "indexOf", "entries", "slice", "findIndex", "find", "copyWithin", "includes", "map", "filter", "every", "fill", "set"])
}
%NeverOptimizeFunction(main);
main();
