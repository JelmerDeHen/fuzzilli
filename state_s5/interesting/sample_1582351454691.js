function main() {
let v2 = 0;
const v3 = v2 + 1;
// v3 = .primitive
v2 = v3;
let v6 = 339680996;
const v13 = new Int32Array(128);
// v13 = .object(ofGroup: Int32Array, withProperties: ["constructor", "buffer", "byteOffset", "byteLength", "__proto__", "length"], withMethods: ["find", "sort", "indexOf", "subarray", "entries", "reduce", "reverse", "values", "keys", "forEach", "set", "filter", "findIndex", "includes", "join", "slice", "copyWithin", "reduceRight", "fill", "map", "lastIndexOf", "some", "every"])
v13.constructor = Uint32Array;
const v16 = v13.slice(16,1337);
// v16 = .object(ofGroup: Int32Array, withProperties: ["length", "constructor", "byteOffset", "__proto__", "buffer", "byteLength"], withMethods: ["forEach", "reduce", "reverse", "slice", "subarray", "map", "find", "join", "lastIndexOf", "includes", "copyWithin", "sort", "some", "indexOf", "entries", "every", "filter", "fill", "findIndex", "keys", "set", "reduceRight", "values"])
}
%NeverOptimizeFunction(main);
main();
