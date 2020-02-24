function main() {
let v1 = Uint32Array;
const v4 = new Int32Array(v1);
// v4 = .object(ofGroup: Int32Array, withProperties: ["length", "__proto__", "constructor", "buffer", "byteOffset", "byteLength"], withMethods: ["map", "copyWithin", "forEach", "subarray", "entries", "find", "reduceRight", "set", "filter", "keys", "indexOf", "some", "slice", "reverse", "values", "reduce", "findIndex", "includes", "sort", "fill", "every", "lastIndexOf", "join"])
v4.constructor = Int8Array;
const v7 = v4.slice(-2076787791,1337);
// v7 = .object(ofGroup: Int32Array, withProperties: ["buffer", "byteLength", "byteOffset", "length", "__proto__", "constructor"], withMethods: ["find", "forEach", "entries", "subarray", "reduce", "fill", "set", "lastIndexOf", "every", "slice", "findIndex", "some", "join", "reverse", "indexOf", "keys", "filter", "copyWithin", "sort", "reduceRight", "map", "includes", "values"])
}
%NeverOptimizeFunction(main);
main();
