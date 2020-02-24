function main() {
const v2 = [13.37];
// v2 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v5 = new Int16Array("toString");
// v5 = .object(ofGroup: Int16Array, withProperties: ["byteOffset", "constructor", "byteLength", "__proto__", "length", "buffer"], withMethods: ["includes", "indexOf", "forEach", "filter", "map", "reduceRight", "join", "entries", "sort", "reduce", "lastIndexOf", "set", "keys", "subarray", "slice", "findIndex", "values", "reverse", "some", "every", "copyWithin", "fill", "find"])
const v6 = {b:268435456,...v5,...v2};
// v6 = .object(ofGroup: Object, withProperties: ["byteOffset", "length", "buffer", "b", "constructor", "byteLength", "__proto__"], withMethods: ["splice", "reverse", "reduceRight", "join", "reduce", "indexOf", "lastIndexOf", "map", "pop", "set", "concat", "flat", "keys", "copyWithin", "findIndex", "subarray", "find", "toLocaleString", "some", "entries", "sort", "shift", "slice", "every", "toString", "forEach", "filter", "includes", "push", "values", "unshift", "flatMap", "fill"])
}
%NeverOptimizeFunction(main);
main();
