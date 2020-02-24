function main() {
const v3 = new Uint32Array(1337);
// v3 = .object(ofGroup: Uint32Array, withProperties: ["__proto__", "byteLength", "length", "constructor", "byteOffset", "buffer"], withMethods: ["sort", "filter", "forEach", "set", "keys", "subarray", "reduceRight", "includes", "copyWithin", "reverse", "findIndex", "lastIndexOf", "join", "entries", "map", "some", "slice", "fill", "indexOf", "every", "find", "reduce", "values"])
v3.constructor = Float64Array;
const v6 = v3.slice(7,1337);
// v6 = .object(ofGroup: Uint32Array, withProperties: ["byteLength", "constructor", "buffer", "__proto__", "length", "byteOffset"], withMethods: ["slice", "findIndex", "some", "copyWithin", "indexOf", "values", "includes", "forEach", "map", "sort", "entries", "filter", "every", "reduce", "reverse", "subarray", "reduceRight", "set", "join", "keys", "fill", "find", "lastIndexOf"])
}
%NeverOptimizeFunction(main);
main();
