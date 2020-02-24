function main() {
let v1 = Uint32Array;
const v4 = new Int32Array(v1);
// v4 = .object(ofGroup: Int32Array, withProperties: ["__proto__", "buffer", "length", "constructor", "byteOffset", "byteLength"], withMethods: ["filter", "map", "reverse", "slice", "some", "join", "forEach", "fill", "every", "sort", "find", "set", "includes", "entries", "subarray", "indexOf", "reduceRight", "lastIndexOf", "reduce", "values", "keys", "copyWithin", "findIndex"])
v4.constructor = Int8Array;
const v7 = v4.slice(-2076787791,1337);
// v7 = .object(ofGroup: Int32Array, withProperties: ["buffer", "byteLength", "constructor", "__proto__", "length", "byteOffset"], withMethods: ["filter", "copyWithin", "every", "set", "fill", "slice", "subarray", "join", "some", "includes", "reverse", "sort", "keys", "forEach", "indexOf", "entries", "find", "map", "reduce", "reduceRight", "lastIndexOf", "values", "findIndex"])
}
%NeverOptimizeFunction(main);
main();
