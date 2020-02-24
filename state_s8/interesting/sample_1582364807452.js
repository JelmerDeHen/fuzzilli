function main() {
const v1 = [-2.220446049250313e-16,-2.220446049250313e-16];
// v1 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
let v2 = v1;
const v5 = new Float32Array(v2);
// v5 = .object(ofGroup: Float32Array, withProperties: ["__proto__", "buffer", "constructor", "length", "byteLength", "byteOffset"], withMethods: ["sort", "some", "indexOf", "find", "subarray", "set", "reverse", "reduce", "join", "values", "keys", "entries", "map", "copyWithin", "includes", "findIndex", "slice", "reduceRight", "lastIndexOf", "filter", "every", "fill", "forEach"])
v5.constructor = Uint8Array;
const v8 = v5.slice(-9007199254740993,1337);
// v8 = .object(ofGroup: Float32Array, withProperties: ["buffer", "byteLength", "constructor", "byteOffset", "length", "__proto__"], withMethods: ["set", "entries", "reduce", "lastIndexOf", "map", "join", "values", "sort", "some", "includes", "keys", "reverse", "find", "filter", "every", "copyWithin", "fill", "findIndex", "forEach", "subarray", "reduceRight", "indexOf", "slice"])
}
%NeverOptimizeFunction(main);
main();
