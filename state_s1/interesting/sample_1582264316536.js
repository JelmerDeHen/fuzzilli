function main() {
const v2 = [13.37];
// v2 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v5 = new Int16Array("toString");
// v5 = .object(ofGroup: Int16Array, withProperties: ["constructor", "buffer", "byteLength", "__proto__", "byteOffset", "length"], withMethods: ["lastIndexOf", "reduceRight", "every", "reduce", "copyWithin", "findIndex", "reverse", "sort", "map", "some", "join", "find", "filter", "subarray", "values", "indexOf", "keys", "fill", "includes", "slice", "set", "forEach", "entries"])
const v6 = {b:268435456,...v5,...v2};
// v6 = .object(ofGroup: Object, withProperties: ["__proto__", "constructor", "byteLength", "b", "buffer", "byteOffset", "length"], withMethods: ["set", "pop", "values", "push", "flatMap", "keys", "sort", "reverse", "slice", "forEach", "subarray", "find", "indexOf", "toLocaleString", "copyWithin", "reduce", "filter", "toString", "shift", "includes", "every", "lastIndexOf", "concat", "map", "some", "unshift", "join", "entries", "flat", "findIndex", "reduceRight", "splice", "fill"])
}
%NeverOptimizeFunction(main);
main();
