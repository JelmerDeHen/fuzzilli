function main() {
const v2 = [];
// v2 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v3 = {__proto__:9007199254740991,length:1337,constructor:1337,a:v2};
// v3 = .object(ofGroup: Object, withProperties: ["length", "constructor", "__proto__", "a"])
const v6 = new Uint8Array(v3);
// v6 = .object(ofGroup: Uint8Array, withProperties: ["buffer", "byteLength", "byteOffset", "length", "__proto__", "constructor"], withMethods: ["copyWithin", "keys", "forEach", "findIndex", "map", "sort", "entries", "subarray", "includes", "set", "reverse", "reduceRight", "join", "values", "fill", "indexOf", "every", "slice", "find", "filter", "some", "reduce", "lastIndexOf"])
v6.constructor = Int16Array;
const v8 = v6.slice(v6,255);
// v8 = .object(ofGroup: Uint8Array, withProperties: ["buffer", "byteOffset", "constructor", "byteLength", "length", "__proto__"], withMethods: ["values", "fill", "forEach", "reduceRight", "lastIndexOf", "join", "every", "subarray", "reverse", "some", "keys", "copyWithin", "indexOf", "includes", "findIndex", "find", "sort", "map", "reduce", "filter", "slice", "entries", "set"])
}
%NeverOptimizeFunction(main);
main();
