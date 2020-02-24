function main() {
const v6 = ["matchAll",1337,1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v10 = new Float64Array(v6);
// v10 = .object(ofGroup: Float64Array, withProperties: ["byteLength", "constructor", "length", "__proto__", "buffer", "byteOffset"], withMethods: ["filter", "set", "every", "join", "copyWithin", "reverse", "slice", "keys", "fill", "sort", "indexOf", "some", "subarray", "reduce", "reduceRight", "map", "values", "includes", "forEach", "lastIndexOf", "entries", "findIndex", "find"])
v10.constructor = Int32Array;
const v12 = v10.slice(isFinite,234126503);
// v12 = .object(ofGroup: Float64Array, withProperties: ["__proto__", "length", "byteLength", "buffer", "constructor", "byteOffset"], withMethods: ["every", "reduce", "lastIndexOf", "findIndex", "reverse", "includes", "forEach", "some", "join", "find", "indexOf", "set", "reduceRight", "slice", "values", "filter", "map", "copyWithin", "fill", "keys", "entries", "subarray", "sort"])
}
%NeverOptimizeFunction(main);
main();
