function main() {
const v3 = new Uint32Array(13.37);
// v3 = .object(ofGroup: Uint32Array, withProperties: ["byteOffset", "byteLength", "buffer", "constructor", "__proto__", "length"], withMethods: ["lastIndexOf", "slice", "keys", "map", "sort", "indexOf", "set", "join", "forEach", "reverse", "filter", "fill", "reduce", "every", "values", "copyWithin", "entries", "some", "subarray", "find", "findIndex", "includes", "reduceRight"])
v3.constructor = Int32Array;
const v6 = v3.slice(1,1337);
// v6 = .object(ofGroup: Uint32Array, withProperties: ["buffer", "byteLength", "__proto__", "byteOffset", "length", "constructor"], withMethods: ["indexOf", "entries", "some", "fill", "filter", "reduceRight", "forEach", "keys", "copyWithin", "map", "every", "subarray", "reduce", "join", "values", "lastIndexOf", "sort", "set", "slice", "find", "findIndex", "reverse", "includes"])
}
%NeverOptimizeFunction(main);
main();
