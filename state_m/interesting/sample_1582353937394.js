function main() {
let v1 = Uint32Array;
const v4 = new Int32Array(v1);
// v4 = .object(ofGroup: Int32Array, withProperties: ["buffer", "length", "byteLength", "__proto__", "byteOffset", "constructor"], withMethods: ["indexOf", "some", "lastIndexOf", "reduceRight", "findIndex", "copyWithin", "forEach", "set", "fill", "filter", "join", "values", "reverse", "map", "subarray", "keys", "slice", "includes", "find", "entries", "sort", "every", "reduce"])
v4.constructor = Int8Array;
const v7 = v4.slice(-2076787791,1337);
// v7 = .object(ofGroup: Int32Array, withProperties: ["constructor", "buffer", "byteOffset", "length", "byteLength", "__proto__"], withMethods: ["keys", "entries", "find", "fill", "filter", "set", "forEach", "map", "some", "subarray", "findIndex", "reduceRight", "values", "sort", "includes", "copyWithin", "indexOf", "every", "reduce", "reverse", "slice", "join", "lastIndexOf"])
}
%NeverOptimizeFunction(main);
main();