function main() {
const v1 = [-2.220446049250313e-16,-2.220446049250313e-16];
// v1 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
let v2 = v1;
const v5 = new Float32Array(v2);
// v5 = .object(ofGroup: Float32Array, withProperties: ["byteOffset", "length", "constructor", "__proto__", "buffer", "byteLength"], withMethods: ["some", "find", "join", "keys", "forEach", "every", "reduceRight", "filter", "values", "entries", "sort", "copyWithin", "map", "subarray", "reverse", "fill", "reduce", "slice", "includes", "indexOf", "set", "findIndex", "lastIndexOf"])
v5.constructor = Uint8Array;
const v8 = v5.slice(-9007199254740993,1337);
// v8 = .object(ofGroup: Float32Array, withProperties: ["__proto__", "buffer", "byteOffset", "constructor", "length", "byteLength"], withMethods: ["some", "keys", "reduceRight", "slice", "forEach", "entries", "copyWithin", "join", "reduce", "find", "set", "subarray", "fill", "includes", "map", "values", "sort", "indexOf", "reverse", "filter", "findIndex", "every", "lastIndexOf"])
}
%NeverOptimizeFunction(main);
main();
