function main() {
const v6 = ["matchAll",1337,1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v10 = new Float64Array(v6);
// v10 = .object(ofGroup: Float64Array, withProperties: ["constructor", "byteOffset", "buffer", "__proto__", "length", "byteLength"], withMethods: ["fill", "sort", "reduceRight", "values", "every", "includes", "lastIndexOf", "findIndex", "copyWithin", "reverse", "keys", "entries", "some", "filter", "forEach", "set", "find", "subarray", "indexOf", "map", "reduce", "slice", "join"])
v10.constructor = Int32Array;
const v12 = v10.slice(isFinite,234126503);
// v12 = .object(ofGroup: Float64Array, withProperties: ["byteLength", "constructor", "length", "__proto__", "buffer", "byteOffset"], withMethods: ["reduceRight", "findIndex", "indexOf", "copyWithin", "reduce", "every", "lastIndexOf", "forEach", "entries", "filter", "set", "includes", "find", "reverse", "fill", "sort", "some", "subarray", "keys", "join", "map", "slice", "values"])
}
%NeverOptimizeFunction(main);
main();
