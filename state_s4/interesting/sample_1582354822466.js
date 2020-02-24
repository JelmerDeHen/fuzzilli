function main() {
const v4 = [13.37,13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v10 = new Float64Array(128);
// v10 = .object(ofGroup: Float64Array, withProperties: ["constructor", "byteOffset", "__proto__", "byteLength", "buffer", "length"], withMethods: ["entries", "every", "some", "indexOf", "subarray", "lastIndexOf", "findIndex", "keys", "map", "reverse", "reduce", "filter", "sort", "slice", "join", "set", "find", "forEach", "copyWithin", "includes", "reduceRight", "values", "fill"])
v10.constructor = Int8Array;
const v13 = v10.slice(16,1337);
// v13 = .object(ofGroup: Float64Array, withProperties: ["byteOffset", "length", "constructor", "__proto__", "byteLength", "buffer"], withMethods: ["values", "set", "copyWithin", "map", "every", "includes", "slice", "keys", "some", "join", "reverse", "sort", "indexOf", "entries", "forEach", "filter", "find", "subarray", "fill", "reduceRight", "reduce", "lastIndexOf", "findIndex"])
}
%NeverOptimizeFunction(main);
main();
