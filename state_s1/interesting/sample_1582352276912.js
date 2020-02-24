function main() {
const v3 = new Int16Array(13.37);
// v3 = .object(ofGroup: Int16Array, withProperties: ["constructor", "buffer", "byteLength", "__proto__", "byteOffset", "length"], withMethods: ["lastIndexOf", "reduceRight", "every", "reduce", "copyWithin", "findIndex", "reverse", "sort", "map", "some", "join", "find", "filter", "subarray", "values", "indexOf", "keys", "fill", "includes", "slice", "set", "forEach", "entries"])
v3.constructor = Int32Array;
const v5 = {__proto__:536870912};
// v5 = .object(ofGroup: Object, withProperties: ["__proto__"])
const v8 = v3.slice(1,1337);
// v8 = .object(ofGroup: Int16Array, withProperties: ["buffer", "__proto__", "byteLength", "constructor", "length", "byteOffset"], withMethods: ["reduce", "fill", "subarray", "find", "keys", "filter", "some", "indexOf", "join", "findIndex", "entries", "slice", "reverse", "copyWithin", "sort", "includes", "map", "every", "lastIndexOf", "values", "reduceRight", "forEach", "set"])
}
%NeverOptimizeFunction(main);
main();
