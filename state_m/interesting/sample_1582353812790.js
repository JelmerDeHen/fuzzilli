function main() {
const v2 = [];
// v2 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v3 = {__proto__:9007199254740991,length:1337,constructor:1337,a:v2};
// v3 = .object(ofGroup: Object, withProperties: ["a", "length", "__proto__", "constructor"])
const v6 = new Uint8Array(v3);
// v6 = .object(ofGroup: Uint8Array, withProperties: ["length", "byteOffset", "buffer", "__proto__", "constructor", "byteLength"], withMethods: ["keys", "findIndex", "filter", "indexOf", "reduceRight", "sort", "map", "some", "subarray", "reduce", "fill", "lastIndexOf", "set", "values", "entries", "reverse", "every", "includes", "join", "slice", "copyWithin", "forEach", "find"])
v6.constructor = Int16Array;
const v8 = v6.slice(v6,255);
// v8 = .object(ofGroup: Uint8Array, withProperties: ["__proto__", "length", "byteOffset", "constructor", "byteLength", "buffer"], withMethods: ["values", "findIndex", "copyWithin", "fill", "every", "some", "keys", "forEach", "find", "reduceRight", "reverse", "entries", "indexOf", "filter", "includes", "map", "reduce", "lastIndexOf", "sort", "join", "subarray", "slice", "set"])
}
%NeverOptimizeFunction(main);
main();
