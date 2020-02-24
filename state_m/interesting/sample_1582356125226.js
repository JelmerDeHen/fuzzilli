function main() {
const v3 = new Uint8Array(128);
// v3 = .object(ofGroup: Uint8Array, withProperties: ["length", "byteOffset", "buffer", "__proto__", "constructor", "byteLength"], withMethods: ["keys", "findIndex", "filter", "indexOf", "reduceRight", "sort", "map", "some", "subarray", "reduce", "fill", "lastIndexOf", "set", "values", "entries", "reverse", "every", "includes", "join", "slice", "copyWithin", "forEach", "find"])
v3.constructor = Int8Array;
const v5 = v3.slice(16,128);
// v5 = .object(ofGroup: Uint8Array, withProperties: ["__proto__", "length", "byteOffset", "constructor", "byteLength", "buffer"], withMethods: ["values", "findIndex", "copyWithin", "fill", "every", "some", "keys", "forEach", "find", "reduceRight", "reverse", "entries", "indexOf", "filter", "includes", "map", "reduce", "lastIndexOf", "sort", "join", "subarray", "slice", "set"])
}
%NeverOptimizeFunction(main);
main();
