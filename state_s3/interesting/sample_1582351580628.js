function main() {
const v4 = new Uint16Array(1337);
// v4 = .object(ofGroup: Uint16Array, withProperties: ["__proto__", "byteOffset", "length", "constructor", "buffer", "byteLength"], withMethods: ["entries", "join", "lastIndexOf", "forEach", "filter", "slice", "reduce", "reverse", "findIndex", "keys", "fill", "map", "every", "set", "reduceRight", "includes", "sort", "find", "subarray", "indexOf", "values", "some", "copyWithin"])
v4.constructor = Float64Array;
const v7 = v4.slice(-1,1337);
// v7 = .object(ofGroup: Uint16Array, withProperties: ["length", "constructor", "buffer", "__proto__", "byteOffset", "byteLength"], withMethods: ["reduceRight", "indexOf", "every", "fill", "reverse", "sort", "copyWithin", "entries", "set", "join", "values", "forEach", "filter", "some", "map", "reduce", "slice", "find", "findIndex", "includes", "subarray", "lastIndexOf", "keys"])
}
%NeverOptimizeFunction(main);
main();
