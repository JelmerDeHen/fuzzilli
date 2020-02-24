function main() {
const v2 = [];
// v2 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v3 = {__proto__:9007199254740991,length:1337,constructor:1337,a:v2};
// v3 = .object(ofGroup: Object, withProperties: ["length", "a", "__proto__", "constructor"])
const v6 = new Uint16Array(v3);
// v6 = .object(ofGroup: Uint16Array, withProperties: ["byteLength", "__proto__", "constructor", "buffer", "byteOffset", "length"], withMethods: ["indexOf", "set", "map", "reduce", "join", "values", "subarray", "find", "copyWithin", "sort", "filter", "lastIndexOf", "reduceRight", "includes", "some", "every", "forEach", "findIndex", "reverse", "slice", "fill", "keys", "entries"])
v6.constructor = Int16Array;
const v8 = v6.slice(v6,255);
// v8 = .object(ofGroup: Uint16Array, withProperties: ["byteOffset", "buffer", "length", "constructor", "byteLength", "__proto__"], withMethods: ["subarray", "reduceRight", "indexOf", "find", "sort", "slice", "filter", "reduce", "join", "includes", "keys", "map", "entries", "set", "some", "reverse", "findIndex", "lastIndexOf", "values", "every", "copyWithin", "fill", "forEach"])
}
%NeverOptimizeFunction(main);
main();
