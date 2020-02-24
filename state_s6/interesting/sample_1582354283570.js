function main() {
let v2 = 0;
const v6 = new Int32Array(64);
// v6 = .object(ofGroup: Int32Array, withProperties: ["constructor", "buffer", "length", "__proto__", "byteLength", "byteOffset"], withMethods: ["findIndex", "sort", "fill", "every", "subarray", "lastIndexOf", "copyWithin", "indexOf", "reduce", "values", "find", "slice", "reduceRight", "reverse", "includes", "keys", "filter", "map", "some", "entries", "forEach", "set", "join"])
v6.constructor = Uint8Array;
const v9 = v6.slice(10,1337);
// v9 = .object(ofGroup: Int32Array, withProperties: ["__proto__", "byteOffset", "buffer", "byteLength", "constructor", "length"], withMethods: ["some", "values", "find", "subarray", "slice", "indexOf", "entries", "filter", "join", "forEach", "findIndex", "every", "keys", "sort", "includes", "set", "lastIndexOf", "reduce", "fill", "reduceRight", "copyWithin", "map", "reverse"])
const v10 = v2 + 1;
// v10 = .primitive
v2 = v10;
}
%NeverOptimizeFunction(main);
main();
