function main() {
const v2 = [13.37,13.37];
// v2 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v4 = [v2,this,1337,v2];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v7 = new Uint8ClampedArray(v4);
// v7 = .object(ofGroup: Uint8ClampedArray, withProperties: ["byteLength", "__proto__", "byteOffset", "constructor", "length", "buffer"], withMethods: ["entries", "every", "lastIndexOf", "values", "reverse", "map", "copyWithin", "subarray", "reduce", "filter", "sort", "find", "keys", "reduceRight", "join", "forEach", "fill", "set", "indexOf", "some", "includes", "findIndex", "slice"])
v7.constructor = Int32Array;
const v10 = v7.slice(-42667988,2117265137);
// v10 = .object(ofGroup: Uint8ClampedArray, withProperties: ["byteOffset", "__proto__", "length", "constructor", "buffer", "byteLength"], withMethods: ["subarray", "reverse", "reduce", "lastIndexOf", "sort", "join", "map", "keys", "find", "entries", "copyWithin", "slice", "forEach", "includes", "indexOf", "every", "set", "some", "values", "reduceRight", "fill", "filter", "findIndex"])
}
%NeverOptimizeFunction(main);
main();
