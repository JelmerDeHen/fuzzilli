function main() {
const v7 = new Int8Array(13.37);
// v7 = .object(ofGroup: Int8Array, withProperties: ["buffer", "__proto__", "byteOffset", "length", "constructor", "byteLength"], withMethods: ["fill", "set", "sort", "subarray", "slice", "reduce", "includes", "every", "some", "copyWithin", "reduceRight", "reverse", "indexOf", "lastIndexOf", "values", "entries", "keys", "join", "map", "find", "findIndex", "forEach", "filter"])
v7.constructor = Float32Array;
const v10 = v7.slice(3,1337);
// v10 = .object(ofGroup: Int8Array, withProperties: ["buffer", "constructor", "byteOffset", "length", "__proto__", "byteLength"], withMethods: ["indexOf", "reduce", "join", "map", "lastIndexOf", "every", "findIndex", "forEach", "entries", "values", "fill", "includes", "reverse", "slice", "filter", "sort", "find", "keys", "copyWithin", "set", "some", "subarray", "reduceRight"])
}
%NeverOptimizeFunction(main);
main();
