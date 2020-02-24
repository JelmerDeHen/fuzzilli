function main() {
const v2 = ["matchAll",1337,1337,1337];
// v2 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v6 = new Int16Array(v2);
// v6 = .object(ofGroup: Int16Array, withProperties: ["__proto__", "buffer", "length", "byteLength", "byteOffset", "constructor"], withMethods: ["keys", "reduce", "indexOf", "map", "set", "join", "slice", "reduceRight", "lastIndexOf", "entries", "values", "reverse", "sort", "find", "findIndex", "forEach", "every", "some", "copyWithin", "fill", "includes", "subarray", "filter"])
v6.constructor = Int32Array;
const v8 = v6.slice(isFinite,234126503);
// v8 = .object(ofGroup: Int16Array, withProperties: ["length", "buffer", "__proto__", "constructor", "byteOffset", "byteLength"], withMethods: ["values", "reverse", "filter", "slice", "lastIndexOf", "reduce", "reduceRight", "map", "findIndex", "sort", "every", "some", "keys", "copyWithin", "set", "includes", "find", "indexOf", "forEach", "subarray", "join", "fill", "entries"])
}
%NeverOptimizeFunction(main);
main();
