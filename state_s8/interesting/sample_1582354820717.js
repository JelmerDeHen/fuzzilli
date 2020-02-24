function main() {
const v2 = new Uint8Array(Uint8Array);
// v2 = .object(ofGroup: Uint8Array, withProperties: ["length", "byteLength", "buffer", "__proto__", "byteOffset", "constructor"], withMethods: ["fill", "slice", "findIndex", "reverse", "indexOf", "filter", "map", "copyWithin", "set", "find", "keys", "forEach", "subarray", "every", "reduce", "entries", "join", "lastIndexOf", "values", "sort", "some", "reduceRight", "includes"])
v2.constructor = Int32Array;
const v5 = v2.slice(0,1337);
// v5 = .object(ofGroup: Uint8Array, withProperties: ["constructor", "byteOffset", "__proto__", "buffer", "byteLength", "length"], withMethods: ["reduceRight", "subarray", "lastIndexOf", "values", "fill", "map", "reverse", "slice", "indexOf", "filter", "every", "some", "find", "forEach", "join", "findIndex", "keys", "copyWithin", "sort", "includes", "reduce", "entries", "set"])
}
%NeverOptimizeFunction(main);
main();
