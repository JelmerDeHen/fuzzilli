function main() {
const v3 = new Uint8Array(1337);
// v3 = .object(ofGroup: Uint8Array, withProperties: ["byteLength", "__proto__", "byteOffset", "length", "buffer", "constructor"], withMethods: ["reverse", "copyWithin", "forEach", "filter", "some", "indexOf", "lastIndexOf", "slice", "values", "every", "fill", "subarray", "findIndex", "keys", "reduceRight", "includes", "map", "reduce", "join", "sort", "set", "find", "entries"])
v3.constructor = Uint32Array;
const v6 = v3.slice(-9007199254740993,1337);
// v6 = .object(ofGroup: Uint8Array, withProperties: ["__proto__", "length", "buffer", "byteLength", "constructor", "byteOffset"], withMethods: ["copyWithin", "forEach", "set", "reduce", "reduceRight", "map", "subarray", "find", "every", "findIndex", "filter", "indexOf", "fill", "includes", "join", "entries", "some", "keys", "lastIndexOf", "values", "slice", "sort", "reverse"])
}
%NeverOptimizeFunction(main);
main();
