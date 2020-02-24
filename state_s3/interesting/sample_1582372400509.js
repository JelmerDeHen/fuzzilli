function main() {
const v1 = [-2.220446049250313e-16,-2.220446049250313e-16,-2.220446049250313e-16,-2.220446049250313e-16,-2.220446049250313e-16];
// v1 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v4 = new Float32Array(v1);
// v4 = .object(ofGroup: Float32Array, withProperties: ["length", "constructor", "buffer", "__proto__", "byteLength", "byteOffset"], withMethods: ["slice", "some", "findIndex", "reduce", "copyWithin", "reverse", "find", "sort", "indexOf", "filter", "keys", "map", "every", "reduceRight", "lastIndexOf", "fill", "set", "forEach", "subarray", "entries", "values", "includes", "join"])
v4.constructor = Int8Array;
const v7 = v4.slice(-2847526874,234126503);
// v7 = .object(ofGroup: Float32Array, withProperties: ["byteLength", "buffer", "constructor", "__proto__", "length", "byteOffset"], withMethods: ["values", "some", "slice", "fill", "forEach", "lastIndexOf", "copyWithin", "entries", "keys", "reduce", "sort", "find", "reverse", "includes", "filter", "reduceRight", "indexOf", "set", "findIndex", "subarray", "map", "join", "every"])
}
%NeverOptimizeFunction(main);
main();
