function main() {
const v2 = [13.37];
// v2 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v5 = new Int16Array("toString");
// v5 = .object(ofGroup: Int16Array, withProperties: ["__proto__", "buffer", "constructor", "length", "byteOffset", "byteLength"], withMethods: ["slice", "fill", "sort", "includes", "entries", "reverse", "find", "keys", "set", "indexOf", "some", "subarray", "reduceRight", "map", "join", "copyWithin", "filter", "reduce", "values", "forEach", "lastIndexOf", "findIndex", "every"])
const v6 = {b:268435456,...v5,...v2};
// v6 = .object(ofGroup: Object, withProperties: ["__proto__", "buffer", "length", "byteLength", "constructor", "b", "byteOffset"], withMethods: ["flatMap", "subarray", "values", "indexOf", "find", "splice", "flat", "push", "unshift", "map", "shift", "reduce", "join", "pop", "reverse", "every", "slice", "set", "toLocaleString", "forEach", "lastIndexOf", "sort", "findIndex", "reduceRight", "fill", "concat", "some", "toString", "entries", "includes", "copyWithin", "filter", "keys"])
}
%NeverOptimizeFunction(main);
main();
