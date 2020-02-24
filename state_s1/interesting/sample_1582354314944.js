function main() {
let v2 = 0;
const v6 = new Int32Array(64);
// v6 = .object(ofGroup: Int32Array, withProperties: ["__proto__", "buffer", "length", "constructor", "byteOffset", "byteLength"], withMethods: ["filter", "map", "reverse", "slice", "some", "join", "forEach", "fill", "every", "sort", "find", "set", "includes", "entries", "subarray", "indexOf", "reduceRight", "lastIndexOf", "reduce", "values", "keys", "copyWithin", "findIndex"])
v6.constructor = Uint8Array;
const v9 = v6.slice(10,1337);
// v9 = .object(ofGroup: Int32Array, withProperties: ["buffer", "byteLength", "constructor", "__proto__", "length", "byteOffset"], withMethods: ["filter", "copyWithin", "every", "set", "fill", "slice", "subarray", "join", "some", "includes", "reverse", "sort", "keys", "forEach", "indexOf", "entries", "find", "map", "reduce", "reduceRight", "lastIndexOf", "values", "findIndex"])
const v10 = v2 + 1;
// v10 = .primitive
v2 = v10;
}
%NeverOptimizeFunction(main);
main();
