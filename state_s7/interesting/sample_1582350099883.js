function main() {
const v4 = new Int8Array(1337);
// v4 = .object(ofGroup: Int8Array, withProperties: ["byteOffset", "constructor", "buffer", "byteLength", "__proto__", "length"], withMethods: ["values", "copyWithin", "fill", "join", "keys", "sort", "entries", "forEach", "subarray", "some", "map", "reduceRight", "reduce", "lastIndexOf", "filter", "findIndex", "reverse", "every", "set", "includes", "find", "slice", "indexOf"])
v4.constructor = Uint32Array;
const v6 = v4.slice(13.37,1337);
// v6 = .object(ofGroup: Int8Array, withProperties: ["buffer", "byteOffset", "byteLength", "__proto__", "length", "constructor"], withMethods: ["entries", "reduce", "forEach", "subarray", "some", "copyWithin", "find", "indexOf", "filter", "map", "findIndex", "join", "fill", "sort", "keys", "every", "set", "includes", "reduceRight", "lastIndexOf", "slice", "values", "reverse"])
}
%NeverOptimizeFunction(main);
main();
