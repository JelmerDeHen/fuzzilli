function main() {
const v3 = new Float32Array(13.37);
// v3 = .object(ofGroup: Float32Array, withProperties: ["length", "constructor", "buffer", "__proto__", "byteLength", "byteOffset"], withMethods: ["slice", "some", "findIndex", "reduce", "copyWithin", "reverse", "find", "sort", "indexOf", "filter", "keys", "map", "every", "reduceRight", "lastIndexOf", "fill", "set", "forEach", "subarray", "entries", "values", "includes", "join"])
v3.constructor = Float64Array;
const v6 = v3.slice(6,1337);
// v6 = .object(ofGroup: Float32Array, withProperties: ["byteLength", "buffer", "constructor", "__proto__", "length", "byteOffset"], withMethods: ["values", "some", "slice", "fill", "forEach", "lastIndexOf", "copyWithin", "entries", "keys", "reduce", "sort", "find", "reverse", "includes", "filter", "reduceRight", "indexOf", "set", "findIndex", "subarray", "map", "join", "every"])
}
%NeverOptimizeFunction(main);
main();
