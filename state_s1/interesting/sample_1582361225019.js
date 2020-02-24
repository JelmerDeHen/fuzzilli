function main() {
const v2 = [];
// v2 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v3 = {__proto__:9007199254740991,length:16,constructor:16,a:v2};
// v3 = .object(ofGroup: Object, withProperties: ["length", "a", "__proto__", "constructor"])
const v6 = new Uint8Array(v3);
// v6 = .object(ofGroup: Uint8Array, withProperties: ["byteLength", "__proto__", "byteOffset", "length", "buffer", "constructor"], withMethods: ["reverse", "copyWithin", "forEach", "filter", "some", "indexOf", "lastIndexOf", "slice", "values", "every", "fill", "subarray", "findIndex", "keys", "reduceRight", "includes", "map", "reduce", "join", "sort", "set", "find", "entries"])
v6.constructor = Int16Array;
const v8 = v6.slice(v6,4294967295);
// v8 = .object(ofGroup: Uint8Array, withProperties: ["__proto__", "length", "buffer", "byteLength", "constructor", "byteOffset"], withMethods: ["copyWithin", "forEach", "set", "reduce", "reduceRight", "map", "subarray", "find", "every", "findIndex", "filter", "indexOf", "fill", "includes", "join", "entries", "some", "keys", "lastIndexOf", "values", "slice", "sort", "reverse"])
}
%NeverOptimizeFunction(main);
main();
