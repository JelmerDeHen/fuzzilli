function main() {
const v3 = new Int16Array(13.37);
// v3 = .object(ofGroup: Int16Array, withProperties: ["byteOffset", "constructor", "byteLength", "__proto__", "length", "buffer"], withMethods: ["includes", "indexOf", "forEach", "filter", "map", "reduceRight", "join", "entries", "sort", "reduce", "lastIndexOf", "set", "keys", "subarray", "slice", "findIndex", "values", "reverse", "some", "every", "copyWithin", "fill", "find"])
v3.constructor = Int32Array;
const v5 = {__proto__:536870912};
// v5 = .object(ofGroup: Object, withProperties: ["__proto__"])
const v8 = v3.slice(1,1337);
// v8 = .object(ofGroup: Int16Array, withProperties: ["length", "__proto__", "buffer", "byteOffset", "constructor", "byteLength"], withMethods: ["set", "map", "join", "find", "subarray", "reverse", "findIndex", "reduce", "indexOf", "includes", "forEach", "copyWithin", "every", "fill", "sort", "keys", "entries", "filter", "some", "reduceRight", "lastIndexOf", "values", "slice"])
}
%NeverOptimizeFunction(main);
main();
