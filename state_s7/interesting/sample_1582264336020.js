function main() {
const v2 = [13.37];
// v2 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v5 = new Int16Array("toString");
// v5 = .object(ofGroup: Int16Array, withProperties: ["__proto__", "buffer", "length", "byteLength", "byteOffset", "constructor"], withMethods: ["keys", "reduce", "indexOf", "map", "set", "join", "slice", "reduceRight", "lastIndexOf", "entries", "values", "reverse", "sort", "find", "findIndex", "forEach", "every", "some", "copyWithin", "fill", "includes", "subarray", "filter"])
const v6 = {b:268435456,...v5,...v2};
// v6 = .object(ofGroup: Object, withProperties: ["b", "byteLength", "byteOffset", "constructor", "length", "buffer", "__proto__"], withMethods: ["flat", "copyWithin", "shift", "reverse", "sort", "push", "map", "fill", "subarray", "filter", "lastIndexOf", "reduce", "toLocaleString", "findIndex", "unshift", "every", "set", "some", "splice", "reduceRight", "concat", "flatMap", "join", "pop", "toString", "find", "includes", "values", "entries", "indexOf", "forEach", "slice", "keys"])
}
%NeverOptimizeFunction(main);
main();
