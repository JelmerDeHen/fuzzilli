function main() {
const v3 = new Int16Array(13.37);
// v3 = .object(ofGroup: Int16Array, withProperties: ["__proto__", "buffer", "constructor", "length", "byteOffset", "byteLength"], withMethods: ["slice", "fill", "sort", "includes", "entries", "reverse", "find", "keys", "set", "indexOf", "some", "subarray", "reduceRight", "map", "join", "copyWithin", "filter", "reduce", "values", "forEach", "lastIndexOf", "findIndex", "every"])
v3.constructor = Int32Array;
const v5 = {__proto__:536870912};
// v5 = .object(ofGroup: Object, withProperties: ["__proto__"])
const v8 = v3.slice(1,1337);
// v8 = .object(ofGroup: Int16Array, withProperties: ["__proto__", "buffer", "constructor", "byteLength", "byteOffset", "length"], withMethods: ["keys", "reduceRight", "every", "forEach", "slice", "find", "set", "findIndex", "fill", "entries", "map", "reduce", "lastIndexOf", "includes", "indexOf", "values", "sort", "reverse", "filter", "subarray", "copyWithin", "join", "some"])
}
%NeverOptimizeFunction(main);
main();
