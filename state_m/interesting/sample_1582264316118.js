function main() {
const v2 = [13.37];
// v2 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v5 = new Int16Array("toString");
// v5 = .object(ofGroup: Int16Array, withProperties: ["constructor", "buffer", "byteLength", "__proto__", "byteOffset", "length"], withMethods: ["sort", "includes", "indexOf", "entries", "forEach", "filter", "keys", "values", "map", "reverse", "slice", "lastIndexOf", "fill", "join", "set", "every", "some", "copyWithin", "find", "reduce", "subarray", "reduceRight", "findIndex"])
const v6 = {b:268435456,...v5,...v2};
// v6 = .object(ofGroup: Object, withProperties: ["byteOffset", "constructor", "b", "buffer", "length", "__proto__", "byteLength"], withMethods: ["toString", "slice", "sort", "concat", "reduce", "every", "forEach", "unshift", "flat", "fill", "lastIndexOf", "shift", "toLocaleString", "indexOf", "find", "filter", "map", "reduceRight", "push", "keys", "entries", "findIndex", "includes", "flatMap", "pop", "set", "subarray", "copyWithin", "reverse", "join", "values", "some", "splice"])
}
%NeverOptimizeFunction(main);
main();
