function main() {
const v2 = [];
// v2 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v3 = {__proto__:4,length:1337,constructor:1337,a:v2};
// v3 = .object(ofGroup: Object, withProperties: ["constructor", "a", "__proto__", "length"])
const v6 = new Uint16Array(v3);
// v6 = .object(ofGroup: Uint16Array, withProperties: ["__proto__", "buffer", "byteLength", "byteOffset", "constructor", "length"], withMethods: ["set", "filter", "some", "sort", "reduce", "lastIndexOf", "fill", "indexOf", "slice", "keys", "reverse", "every", "includes", "values", "entries", "findIndex", "subarray", "reduceRight", "map", "copyWithin", "find", "join", "forEach"])
v6.constructor = Int16Array;
const v8 = v6.slice(v6,1337);
// v8 = .object(ofGroup: Uint16Array, withProperties: ["buffer", "__proto__", "byteOffset", "byteLength", "length", "constructor"], withMethods: ["some", "slice", "values", "filter", "subarray", "forEach", "join", "includes", "lastIndexOf", "find", "map", "keys", "indexOf", "sort", "findIndex", "reverse", "copyWithin", "every", "entries", "reduce", "reduceRight", "fill", "set"])
}
%NeverOptimizeFunction(main);
main();
