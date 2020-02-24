function main() {
const v2 = [13.37];
// v2 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v5 = new Int16Array("toString");
// v5 = .object(ofGroup: Int16Array, withProperties: ["length", "byteLength", "__proto__", "byteOffset", "constructor", "buffer"], withMethods: ["lastIndexOf", "fill", "join", "reduce", "some", "findIndex", "entries", "map", "slice", "reverse", "sort", "set", "indexOf", "find", "copyWithin", "subarray", "includes", "values", "keys", "filter", "forEach", "every", "reduceRight"])
const v6 = {b:268435456,...v5,...v2};
// v6 = .object(ofGroup: Object, withProperties: ["b", "byteLength", "length", "byteOffset", "__proto__", "constructor", "buffer"], withMethods: ["every", "sort", "fill", "reduce", "toLocaleString", "values", "set", "flat", "includes", "concat", "findIndex", "map", "filter", "some", "flatMap", "shift", "splice", "pop", "toString", "lastIndexOf", "indexOf", "forEach", "copyWithin", "subarray", "find", "join", "push", "reverse", "slice", "reduceRight", "unshift", "keys", "entries"])
}
%NeverOptimizeFunction(main);
main();
