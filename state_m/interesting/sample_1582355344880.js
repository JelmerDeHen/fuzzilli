function main() {
let v5 = 0;
const v10 = new Uint32Array(1337);
// v10 = .object(ofGroup: Uint32Array, withProperties: ["buffer", "length", "__proto__", "byteLength", "byteOffset", "constructor"], withMethods: ["includes", "forEach", "every", "some", "subarray", "lastIndexOf", "values", "copyWithin", "findIndex", "reverse", "sort", "keys", "filter", "join", "indexOf", "reduce", "reduceRight", "set", "slice", "find", "fill", "map", "entries"])
v10.constructor = Uint8Array;
const v11 = v10.slice(Uint8Array,4);
// v11 = .object(ofGroup: Uint32Array, withProperties: ["byteLength", "buffer", "constructor", "byteOffset", "__proto__", "length"], withMethods: ["reverse", "find", "values", "some", "findIndex", "every", "reduce", "entries", "set", "forEach", "keys", "fill", "slice", "includes", "map", "reduceRight", "lastIndexOf", "sort", "filter", "subarray", "join", "copyWithin", "indexOf"])
}
%NeverOptimizeFunction(main);
main();
