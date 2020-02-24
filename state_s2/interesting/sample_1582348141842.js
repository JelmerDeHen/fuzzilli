function main() {
const v3 = new Int16Array(1337);
// v3 = .object(ofGroup: Int16Array, withProperties: ["buffer", "__proto__", "length", "byteLength", "constructor", "byteOffset"], withMethods: ["copyWithin", "fill", "reduce", "keys", "sort", "filter", "every", "reduceRight", "set", "subarray", "find", "includes", "indexOf", "forEach", "entries", "some", "lastIndexOf", "findIndex", "values", "reverse", "slice", "map", "join"])
v3.constructor = Uint16Array;
const v6 = [1337,1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v12 = v3.slice(1024,234126503);
// v12 = .object(ofGroup: Int16Array, withProperties: ["byteLength", "byteOffset", "__proto__", "length", "buffer", "constructor"], withMethods: ["some", "find", "forEach", "entries", "reduce", "values", "findIndex", "indexOf", "keys", "map", "every", "lastIndexOf", "reverse", "sort", "subarray", "slice", "includes", "reduceRight", "fill", "copyWithin", "set", "join", "filter"])
}
%NeverOptimizeFunction(main);
main();
