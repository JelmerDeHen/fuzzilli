function main() {
const v2 = [];
// v2 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v3 = {__proto__:9007199254740991,length:1337,constructor:1337,a:v2};
// v3 = .object(ofGroup: Object, withProperties: ["constructor", "__proto__", "a", "length"])
const v6 = new Uint8Array(v3);
// v6 = .object(ofGroup: Uint8Array, withProperties: ["byteLength", "__proto__", "constructor", "buffer", "length", "byteOffset"], withMethods: ["indexOf", "every", "some", "includes", "reduce", "sort", "find", "keys", "subarray", "slice", "reduceRight", "fill", "copyWithin", "findIndex", "join", "forEach", "filter", "entries", "map", "set", "lastIndexOf", "values", "reverse"])
v6.constructor = Int16Array;
const v8 = v6.slice(v6,255);
// v8 = .object(ofGroup: Uint8Array, withProperties: ["byteOffset", "buffer", "length", "byteLength", "constructor", "__proto__"], withMethods: ["indexOf", "keys", "every", "subarray", "findIndex", "reduce", "entries", "values", "reverse", "set", "join", "fill", "filter", "find", "slice", "sort", "includes", "forEach", "some", "lastIndexOf", "reduceRight", "map", "copyWithin"])
}
%NeverOptimizeFunction(main);
main();
