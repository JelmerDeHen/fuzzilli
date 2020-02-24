function main() {
const v1 = [13.37,13.37];
// v1 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v3 = [1337,1337,1337,1337];
// v3 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v4 = [v1,v3];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v5 = {e:13.37,__proto__:v4,d:v4};
// v5 = .object(ofGroup: Object, withProperties: ["__proto__", "d", "e"])
const v9 = new Uint8ClampedArray(38259);
// v9 = .object(ofGroup: Uint8ClampedArray, withProperties: ["byteOffset", "__proto__", "buffer", "length", "byteLength", "constructor"], withMethods: ["every", "reduce", "indexOf", "reverse", "map", "join", "entries", "reduceRight", "subarray", "includes", "sort", "some", "values", "copyWithin", "filter", "lastIndexOf", "set", "fill", "find", "findIndex", "keys", "forEach", "slice"])
const v10 = v9.includes(v5);
// v10 = .boolean
}
%NeverOptimizeFunction(main);
main();
