function main() {
const v3 = new Uint8Array(1337);
// v3 = .object(ofGroup: Uint8Array, withProperties: ["length", "byteOffset", "buffer", "__proto__", "constructor", "byteLength"], withMethods: ["keys", "findIndex", "filter", "indexOf", "reduceRight", "sort", "map", "some", "subarray", "reduce", "fill", "lastIndexOf", "set", "values", "entries", "reverse", "every", "includes", "join", "slice", "copyWithin", "forEach", "find"])
v3.constructor = Uint32Array;
const v6 = v3.slice(-9007199254740993,1337);
// v6 = .object(ofGroup: Uint8Array, withProperties: ["__proto__", "length", "byteOffset", "constructor", "byteLength", "buffer"], withMethods: ["values", "findIndex", "copyWithin", "fill", "every", "some", "keys", "forEach", "find", "reduceRight", "reverse", "entries", "indexOf", "filter", "includes", "map", "reduce", "lastIndexOf", "sort", "join", "subarray", "slice", "set"])
}
%NeverOptimizeFunction(main);
main();
