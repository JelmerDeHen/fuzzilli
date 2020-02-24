function main() {
const v3 = new Uint32Array(1337);
// v3 = .object(ofGroup: Uint32Array, withProperties: ["byteLength", "length", "__proto__", "constructor", "buffer", "byteOffset"], withMethods: ["fill", "sort", "entries", "some", "map", "findIndex", "subarray", "values", "forEach", "filter", "indexOf", "find", "reduce", "keys", "reduceRight", "includes", "copyWithin", "set", "lastIndexOf", "slice", "every", "join", "reverse"])
v3.constructor = Int8Array;
const v6 = v3.slice(-1,1337);
// v6 = .object(ofGroup: Uint32Array, withProperties: ["buffer", "byteOffset", "byteLength", "__proto__", "constructor", "length"], withMethods: ["some", "reduce", "copyWithin", "sort", "reduceRight", "every", "subarray", "slice", "includes", "set", "filter", "findIndex", "map", "join", "values", "indexOf", "find", "reverse", "entries", "fill", "forEach", "lastIndexOf", "keys"])
}
%NeverOptimizeFunction(main);
main();
