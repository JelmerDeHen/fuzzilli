function main() {
const v1 = [13.37,13.37,13.37,13.37];
// v1 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v4 = new Int16Array(v1);
// v4 = .object(ofGroup: Int16Array, withProperties: ["__proto__", "buffer", "constructor", "length", "byteOffset", "byteLength"], withMethods: ["slice", "fill", "sort", "includes", "entries", "reverse", "find", "keys", "set", "indexOf", "some", "subarray", "reduceRight", "map", "join", "copyWithin", "filter", "reduce", "values", "forEach", "lastIndexOf", "findIndex", "every"])
v4.constructor = Int8Array;
const v7 = v4.slice(-1024,2608792922);
// v7 = .object(ofGroup: Int16Array, withProperties: ["__proto__", "buffer", "constructor", "byteLength", "byteOffset", "length"], withMethods: ["keys", "reduceRight", "every", "forEach", "slice", "find", "set", "findIndex", "fill", "entries", "map", "reduce", "lastIndexOf", "includes", "indexOf", "values", "sort", "reverse", "filter", "subarray", "copyWithin", "join", "some"])
}
%NeverOptimizeFunction(main);
main();
