function main() {
const v3 = new Float32Array(1337);
// v3 = .object(ofGroup: Float32Array, withProperties: ["byteOffset", "byteLength", "length", "constructor", "buffer", "__proto__"], withMethods: ["slice", "entries", "some", "set", "indexOf", "join", "includes", "map", "lastIndexOf", "keys", "forEach", "reduce", "fill", "findIndex", "reduceRight", "find", "subarray", "copyWithin", "reverse", "sort", "filter", "every", "values"])
v3.constructor = Uint32Array;
const v6 = v3.slice(10,1337);
// v6 = .object(ofGroup: Float32Array, withProperties: ["length", "byteOffset", "constructor", "byteLength", "buffer", "__proto__"], withMethods: ["subarray", "slice", "findIndex", "reverse", "sort", "includes", "some", "values", "indexOf", "every", "fill", "map", "set", "copyWithin", "keys", "forEach", "reduce", "entries", "reduceRight", "lastIndexOf", "find", "join", "filter"])
}
%NeverOptimizeFunction(main);
main();