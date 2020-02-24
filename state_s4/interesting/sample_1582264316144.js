function main() {
const v2 = [13.37];
// v2 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v5 = new Int16Array("toString");
// v5 = .object(ofGroup: Int16Array, withProperties: ["byteOffset", "buffer", "length", "byteLength", "__proto__", "constructor"], withMethods: ["reverse", "indexOf", "map", "reduceRight", "find", "reduce", "lastIndexOf", "keys", "entries", "values", "copyWithin", "every", "subarray", "fill", "some", "findIndex", "filter", "set", "slice", "join", "forEach", "includes", "sort"])
const v6 = {b:268435456,...v5,...v2};
// v6 = .object(ofGroup: Object, withProperties: ["byteLength", "constructor", "buffer", "b", "length", "byteOffset", "__proto__"], withMethods: ["every", "indexOf", "forEach", "fill", "flatMap", "toLocaleString", "splice", "sort", "values", "join", "keys", "copyWithin", "unshift", "concat", "map", "reduce", "slice", "set", "some", "reverse", "lastIndexOf", "push", "findIndex", "shift", "reduceRight", "subarray", "filter", "includes", "find", "flat", "entries", "toString", "pop"])
}
%NeverOptimizeFunction(main);
main();
