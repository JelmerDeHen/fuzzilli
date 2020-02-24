function main() {
let v5 = 0;
const v10 = new Uint32Array(1337);
// v10 = .object(ofGroup: Uint32Array, withProperties: ["__proto__", "byteLength", "length", "constructor", "byteOffset", "buffer"], withMethods: ["sort", "filter", "forEach", "set", "keys", "subarray", "reduceRight", "includes", "copyWithin", "reverse", "findIndex", "lastIndexOf", "join", "entries", "map", "some", "slice", "fill", "indexOf", "every", "find", "reduce", "values"])
v10.constructor = Uint8Array;
const v11 = v10.slice(Uint8Array,4);
// v11 = .object(ofGroup: Uint32Array, withProperties: ["byteLength", "constructor", "buffer", "__proto__", "length", "byteOffset"], withMethods: ["slice", "findIndex", "some", "copyWithin", "indexOf", "values", "includes", "forEach", "map", "sort", "entries", "filter", "every", "reduce", "reverse", "subarray", "reduceRight", "set", "join", "keys", "fill", "find", "lastIndexOf"])
}
%NeverOptimizeFunction(main);
main();
