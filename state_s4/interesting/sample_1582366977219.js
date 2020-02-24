function main() {
const v2 = [];
// v2 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v3 = {__proto__:9007199254740991,length:16,constructor:16,a:v2};
// v3 = .object(ofGroup: Object, withProperties: ["__proto__", "a", "constructor", "length"])
const v6 = new Int8Array(v3);
// v6 = .object(ofGroup: Int8Array, withProperties: ["__proto__", "buffer", "byteOffset", "constructor", "length", "byteLength"], withMethods: ["some", "fill", "copyWithin", "values", "reduceRight", "lastIndexOf", "findIndex", "slice", "join", "indexOf", "reverse", "sort", "forEach", "map", "find", "subarray", "reduce", "every", "keys", "includes", "entries", "filter", "set"])
v6.constructor = Int16Array;
const v8 = v6.slice(v6,255);
// v8 = .object(ofGroup: Int8Array, withProperties: ["length", "__proto__", "constructor", "buffer", "byteOffset", "byteLength"], withMethods: ["find", "filter", "reverse", "sort", "map", "entries", "every", "set", "reduce", "findIndex", "join", "lastIndexOf", "keys", "forEach", "includes", "some", "subarray", "reduceRight", "values", "fill", "copyWithin", "indexOf", "slice"])
}
%NeverOptimizeFunction(main);
main();
