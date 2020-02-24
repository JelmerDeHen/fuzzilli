function main() {
const v2 = [];
// v2 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v3 = {__proto__:9007199254740991,length:16,constructor:16,a:v2};
// v3 = .object(ofGroup: Object, withProperties: ["__proto__", "length", "constructor", "a"])
const v6 = new Int8Array(v3);
// v6 = .object(ofGroup: Int8Array, withProperties: ["constructor", "buffer", "__proto__", "length", "byteOffset", "byteLength"], withMethods: ["indexOf", "includes", "fill", "entries", "forEach", "reduceRight", "set", "values", "find", "slice", "map", "some", "copyWithin", "findIndex", "reverse", "keys", "filter", "subarray", "reduce", "join", "sort", "lastIndexOf", "every"])
v6.constructor = Int16Array;
const v8 = v6.slice(v6,255);
// v8 = .object(ofGroup: Int8Array, withProperties: ["buffer", "__proto__", "length", "constructor", "byteOffset", "byteLength"], withMethods: ["every", "subarray", "set", "keys", "includes", "join", "lastIndexOf", "fill", "map", "find", "findIndex", "forEach", "reduceRight", "values", "entries", "slice", "copyWithin", "some", "indexOf", "reduce", "reverse", "sort", "filter"])
}
%NeverOptimizeFunction(main);
main();
