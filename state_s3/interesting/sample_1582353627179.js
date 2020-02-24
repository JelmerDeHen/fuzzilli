function main() {
const v2 = [];
// v2 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v3 = {__proto__:9007199254740991,length:1337,constructor:1337,a:v2};
// v3 = .object(ofGroup: Object, withProperties: ["length", "__proto__", "constructor", "a"])
const v6 = new Uint16Array(v3);
// v6 = .object(ofGroup: Uint16Array, withProperties: ["__proto__", "byteOffset", "length", "constructor", "buffer", "byteLength"], withMethods: ["entries", "join", "lastIndexOf", "forEach", "filter", "slice", "reduce", "reverse", "findIndex", "keys", "fill", "map", "every", "set", "reduceRight", "includes", "sort", "find", "subarray", "indexOf", "values", "some", "copyWithin"])
v6.constructor = Int16Array;
const v8 = v6.slice(v6,255);
// v8 = .object(ofGroup: Uint16Array, withProperties: ["length", "constructor", "buffer", "__proto__", "byteOffset", "byteLength"], withMethods: ["reduceRight", "indexOf", "every", "fill", "reverse", "sort", "copyWithin", "entries", "set", "join", "values", "forEach", "filter", "some", "map", "reduce", "slice", "find", "findIndex", "includes", "subarray", "lastIndexOf", "keys"])
}
%NeverOptimizeFunction(main);
main();
