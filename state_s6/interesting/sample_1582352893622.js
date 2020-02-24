function main() {
const v1 = {__proto__:Float32Array};
// v1 = .object(ofGroup: Object, withProperties: ["__proto__"])
const v5 = new Int16Array(v1);
// v5 = .object(ofGroup: Int16Array, withProperties: ["constructor", "byteOffset", "byteLength", "__proto__", "buffer", "length"], withMethods: ["sort", "entries", "findIndex", "slice", "subarray", "map", "find", "every", "some", "join", "copyWithin", "includes", "filter", "lastIndexOf", "values", "reduce", "set", "indexOf", "reduceRight", "forEach", "fill", "reverse", "keys"])
v5.constructor = Float32Array;
const v7 = v5.slice(Uint8Array,234126503);
// v7 = .object(ofGroup: Int16Array, withProperties: ["buffer", "byteLength", "length", "constructor", "__proto__", "byteOffset"], withMethods: ["reduce", "sort", "map", "forEach", "keys", "entries", "reverse", "values", "filter", "join", "copyWithin", "some", "lastIndexOf", "every", "fill", "set", "findIndex", "includes", "indexOf", "subarray", "slice", "reduceRight", "find"])
}
%NeverOptimizeFunction(main);
main();
