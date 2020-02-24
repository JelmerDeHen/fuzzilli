function main() {
const v2 = [];
// v2 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v3 = {__proto__:9007199254740991,length:16,constructor:16,a:v2};
// v3 = .object(ofGroup: Object, withProperties: ["__proto__", "a", "length", "constructor"])
const v6 = new Uint8Array(v3);
// v6 = .object(ofGroup: Uint8Array, withProperties: ["constructor", "__proto__", "buffer", "length", "byteOffset", "byteLength"], withMethods: ["copyWithin", "includes", "reduceRight", "reverse", "indexOf", "fill", "findIndex", "set", "subarray", "sort", "forEach", "slice", "entries", "filter", "join", "every", "some", "keys", "lastIndexOf", "reduce", "values", "find", "map"])
v6.constructor = Int16Array;
const v8 = v6.slice(v6,4294967295);
// v8 = .object(ofGroup: Uint8Array, withProperties: ["constructor", "length", "buffer", "byteOffset", "__proto__", "byteLength"], withMethods: ["sort", "filter", "set", "lastIndexOf", "entries", "some", "slice", "forEach", "reduce", "values", "findIndex", "copyWithin", "map", "includes", "reverse", "reduceRight", "join", "subarray", "fill", "keys", "every", "find", "indexOf"])
}
%NeverOptimizeFunction(main);
main();
