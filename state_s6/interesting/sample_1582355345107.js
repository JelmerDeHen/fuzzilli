function main() {
let v5 = 0;
const v10 = new Uint32Array(1337);
// v10 = .object(ofGroup: Uint32Array, withProperties: ["buffer", "byteOffset", "__proto__", "constructor", "byteLength", "length"], withMethods: ["entries", "keys", "map", "every", "set", "reduce", "includes", "reduceRight", "lastIndexOf", "some", "findIndex", "find", "subarray", "filter", "join", "values", "reverse", "copyWithin", "indexOf", "forEach", "sort", "fill", "slice"])
v10.constructor = Uint8Array;
const v11 = v10.slice(Uint8Array,4);
// v11 = .object(ofGroup: Uint32Array, withProperties: ["__proto__", "buffer", "constructor", "byteOffset", "byteLength", "length"], withMethods: ["map", "forEach", "sort", "includes", "indexOf", "findIndex", "join", "find", "reduce", "subarray", "reduceRight", "values", "slice", "fill", "set", "reverse", "some", "keys", "every", "lastIndexOf", "filter", "entries", "copyWithin"])
}
%NeverOptimizeFunction(main);
main();
