function main() {
const v1 = {__proto__:Float32Array};
// v1 = .object(ofGroup: Object, withProperties: ["__proto__"])
const v5 = new Int16Array(v1);
// v5 = .object(ofGroup: Int16Array, withProperties: ["buffer", "__proto__", "length", "byteLength", "constructor", "byteOffset"], withMethods: ["copyWithin", "fill", "reduce", "keys", "sort", "filter", "every", "reduceRight", "set", "subarray", "find", "includes", "indexOf", "forEach", "entries", "some", "lastIndexOf", "findIndex", "values", "reverse", "slice", "map", "join"])
v5.constructor = Float32Array;
const v7 = v5.slice(Uint8Array,234126503);
// v7 = .object(ofGroup: Int16Array, withProperties: ["byteLength", "byteOffset", "__proto__", "length", "buffer", "constructor"], withMethods: ["some", "find", "forEach", "entries", "reduce", "values", "findIndex", "indexOf", "keys", "map", "every", "lastIndexOf", "reverse", "sort", "subarray", "slice", "includes", "reduceRight", "fill", "copyWithin", "set", "join", "filter"])
}
%NeverOptimizeFunction(main);
main();
