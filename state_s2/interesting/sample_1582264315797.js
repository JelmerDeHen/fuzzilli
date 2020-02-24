function main() {
const v2 = [13.37];
// v2 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v5 = new Int16Array("toString");
// v5 = .object(ofGroup: Int16Array, withProperties: ["buffer", "__proto__", "length", "byteLength", "constructor", "byteOffset"], withMethods: ["copyWithin", "fill", "reduce", "keys", "sort", "filter", "every", "reduceRight", "set", "subarray", "find", "includes", "indexOf", "forEach", "entries", "some", "lastIndexOf", "findIndex", "values", "reverse", "slice", "map", "join"])
const v6 = {b:268435456,...v5,...v2};
// v6 = .object(ofGroup: Object, withProperties: ["__proto__", "constructor", "byteOffset", "buffer", "length", "b", "byteLength"], withMethods: ["forEach", "toString", "values", "reduceRight", "slice", "fill", "sort", "flat", "shift", "indexOf", "find", "set", "splice", "copyWithin", "every", "filter", "includes", "lastIndexOf", "keys", "reduce", "map", "reverse", "some", "push", "pop", "concat", "toLocaleString", "subarray", "flatMap", "join", "findIndex", "entries", "unshift"])
}
%NeverOptimizeFunction(main);
main();
