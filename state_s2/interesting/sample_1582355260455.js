function main() {
const v7 = new Float64Array(1337);
// v7 = .object(ofGroup: Float64Array, withProperties: ["length", "constructor", "buffer", "byteLength", "byteOffset", "__proto__"], withMethods: ["forEach", "indexOf", "keys", "subarray", "fill", "find", "slice", "entries", "filter", "every", "set", "some", "reduceRight", "join", "reverse", "reduce", "copyWithin", "findIndex", "sort", "map", "includes", "lastIndexOf", "values"])
v7.constructor = Float32Array;
const v9 = v7.slice(Uint8Array,234126503);
// v9 = .object(ofGroup: Float64Array, withProperties: ["buffer", "byteOffset", "byteLength", "constructor", "length", "__proto__"], withMethods: ["set", "reduce", "values", "fill", "map", "join", "subarray", "filter", "findIndex", "keys", "some", "reduceRight", "slice", "includes", "lastIndexOf", "copyWithin", "find", "forEach", "reverse", "sort", "entries", "every", "indexOf"])
}
%NeverOptimizeFunction(main);
main();
