function main() {
const v7 = new Int8Array(13.37);
// v7 = .object(ofGroup: Int8Array, withProperties: ["byteLength", "__proto__", "length", "buffer", "byteOffset", "constructor"], withMethods: ["join", "entries", "map", "reduceRight", "find", "lastIndexOf", "keys", "values", "fill", "reverse", "indexOf", "filter", "reduce", "includes", "some", "set", "findIndex", "copyWithin", "every", "subarray", "forEach", "slice", "sort"])
v7.constructor = Float32Array;
const v10 = v7.slice(3,1337);
// v10 = .object(ofGroup: Int8Array, withProperties: ["constructor", "byteOffset", "length", "__proto__", "byteLength", "buffer"], withMethods: ["join", "entries", "reduce", "fill", "reduceRight", "slice", "reverse", "findIndex", "set", "sort", "every", "copyWithin", "includes", "indexOf", "filter", "keys", "subarray", "find", "forEach", "map", "lastIndexOf", "some", "values"])
}
%NeverOptimizeFunction(main);
main();
