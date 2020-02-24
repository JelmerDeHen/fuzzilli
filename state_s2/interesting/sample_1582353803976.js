function main() {
const v3 = new Uint32Array(1337);
// v3 = .object(ofGroup: Uint32Array, withProperties: ["__proto__", "buffer", "constructor", "byteOffset", "length", "byteLength"], withMethods: ["reduceRight", "slice", "filter", "fill", "keys", "reverse", "indexOf", "reduce", "lastIndexOf", "includes", "find", "copyWithin", "map", "forEach", "some", "join", "subarray", "values", "every", "entries", "set", "findIndex", "sort"])
v3.constructor = Int8Array;
const v6 = v3.slice(-1,1337);
// v6 = .object(ofGroup: Uint32Array, withProperties: ["__proto__", "constructor", "buffer", "byteOffset", "length", "byteLength"], withMethods: ["forEach", "every", "reduce", "entries", "filter", "join", "lastIndexOf", "some", "findIndex", "values", "subarray", "map", "keys", "reverse", "reduceRight", "sort", "set", "copyWithin", "find", "includes", "slice", "indexOf", "fill"])
}
%NeverOptimizeFunction(main);
main();
