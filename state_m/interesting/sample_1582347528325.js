function main() {
let v2 = RegExp;
const v6 = new Int8Array(1337);
// v6 = .object(ofGroup: Int8Array, withProperties: ["constructor", "buffer", "__proto__", "length", "byteOffset", "byteLength"], withMethods: ["indexOf", "includes", "fill", "entries", "forEach", "reduceRight", "set", "values", "find", "slice", "map", "some", "copyWithin", "findIndex", "reverse", "keys", "filter", "subarray", "reduce", "join", "sort", "lastIndexOf", "every"])
v6.constructor = Uint32Array;
const v9 = v6.slice(3,1337);
// v9 = .object(ofGroup: Int8Array, withProperties: ["buffer", "__proto__", "length", "constructor", "byteOffset", "byteLength"], withMethods: ["every", "subarray", "set", "keys", "includes", "join", "lastIndexOf", "fill", "map", "find", "findIndex", "forEach", "reduceRight", "values", "entries", "slice", "copyWithin", "some", "indexOf", "reduce", "reverse", "sort", "filter"])
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
