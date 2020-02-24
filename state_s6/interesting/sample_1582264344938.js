function main() {
const v2 = [13.37];
// v2 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v5 = new Int16Array("toString");
// v5 = .object(ofGroup: Int16Array, withProperties: ["constructor", "byteOffset", "byteLength", "__proto__", "buffer", "length"], withMethods: ["sort", "entries", "findIndex", "slice", "subarray", "map", "find", "every", "some", "join", "copyWithin", "includes", "filter", "lastIndexOf", "values", "reduce", "set", "indexOf", "reduceRight", "forEach", "fill", "reverse", "keys"])
const v6 = {b:268435456,...v5,...v2};
// v6 = .object(ofGroup: Object, withProperties: ["b", "byteLength", "length", "byteOffset", "buffer", "__proto__", "constructor"], withMethods: ["reverse", "copyWithin", "fill", "concat", "find", "values", "splice", "forEach", "toString", "toLocaleString", "reduce", "includes", "lastIndexOf", "flat", "every", "set", "reduceRight", "join", "filter", "some", "entries", "findIndex", "map", "unshift", "pop", "subarray", "flatMap", "shift", "indexOf", "push", "sort", "keys", "slice"])
}
%NeverOptimizeFunction(main);
main();
