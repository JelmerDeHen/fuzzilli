function main() {
let v2 = RegExp;
const v6 = new Int8Array(1337);
// v6 = .object(ofGroup: Int8Array, withProperties: ["__proto__", "buffer", "byteOffset", "constructor", "length", "byteLength"], withMethods: ["some", "fill", "copyWithin", "values", "reduceRight", "lastIndexOf", "findIndex", "slice", "join", "indexOf", "reverse", "sort", "forEach", "map", "find", "subarray", "reduce", "every", "keys", "includes", "entries", "filter", "set"])
v6.constructor = Uint32Array;
const v9 = v6.slice(3,1337);
// v9 = .object(ofGroup: Int8Array, withProperties: ["length", "__proto__", "constructor", "buffer", "byteOffset", "byteLength"], withMethods: ["find", "filter", "reverse", "sort", "map", "entries", "every", "set", "reduce", "findIndex", "join", "lastIndexOf", "keys", "forEach", "includes", "some", "subarray", "reduceRight", "values", "fill", "copyWithin", "indexOf", "slice"])
const v10 = "hasInstance"[v2];
// v10 = .unknown
let v13 = 0;
let v16 = 0;
const v17 = v16 + 1;
// v17 = .primitive
v16 = v17;
}
%NeverOptimizeFunction(main);
main();
