function main() {
const v1 = [13.37,13.37,13.37,13.37];
// v1 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v4 = new Int16Array(v1);
// v4 = .object(ofGroup: Int16Array, withProperties: ["buffer", "__proto__", "length", "byteLength", "constructor", "byteOffset"], withMethods: ["copyWithin", "fill", "reduce", "keys", "sort", "filter", "every", "reduceRight", "set", "subarray", "find", "includes", "indexOf", "forEach", "entries", "some", "lastIndexOf", "findIndex", "values", "reverse", "slice", "map", "join"])
v4.constructor = Int8Array;
const v7 = v4.slice(-1024,2608792922);
// v7 = .object(ofGroup: Int16Array, withProperties: ["byteLength", "byteOffset", "__proto__", "length", "buffer", "constructor"], withMethods: ["some", "find", "forEach", "entries", "reduce", "values", "findIndex", "indexOf", "keys", "map", "every", "lastIndexOf", "reverse", "sort", "subarray", "slice", "includes", "reduceRight", "fill", "copyWithin", "set", "join", "filter"])
}
%NeverOptimizeFunction(main);
main();
