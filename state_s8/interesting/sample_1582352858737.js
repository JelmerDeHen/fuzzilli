function main() {
const v1 = {__proto__:Float32Array};
// v1 = .object(ofGroup: Object, withProperties: ["__proto__"])
const v5 = new Int16Array(v1);
// v5 = .object(ofGroup: Int16Array, withProperties: ["byteOffset", "constructor", "byteLength", "__proto__", "length", "buffer"], withMethods: ["includes", "indexOf", "forEach", "filter", "map", "reduceRight", "join", "entries", "sort", "reduce", "lastIndexOf", "set", "keys", "subarray", "slice", "findIndex", "values", "reverse", "some", "every", "copyWithin", "fill", "find"])
v5.constructor = Float32Array;
const v7 = v5.slice(Uint8Array,234126503);
// v7 = .object(ofGroup: Int16Array, withProperties: ["length", "__proto__", "buffer", "byteOffset", "constructor", "byteLength"], withMethods: ["set", "map", "join", "find", "subarray", "reverse", "findIndex", "reduce", "indexOf", "includes", "forEach", "copyWithin", "every", "fill", "sort", "keys", "entries", "filter", "some", "reduceRight", "lastIndexOf", "values", "slice"])
}
%NeverOptimizeFunction(main);
main();
