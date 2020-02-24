function main() {
const v1 = [-2.220446049250313e-16,-2.220446049250313e-16];
// v1 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
let v2 = v1;
const v5 = new Float32Array(v2);
// v5 = .object(ofGroup: Float32Array, withProperties: ["byteLength", "constructor", "__proto__", "buffer", "byteOffset", "length"], withMethods: ["entries", "sort", "fill", "some", "reduceRight", "map", "values", "includes", "copyWithin", "reverse", "indexOf", "filter", "findIndex", "find", "every", "set", "keys", "subarray", "reduce", "slice", "forEach", "join", "lastIndexOf"])
v5.constructor = Uint8Array;
const v8 = v5.slice(-9007199254740993,1337);
// v8 = .object(ofGroup: Float32Array, withProperties: ["length", "byteOffset", "byteLength", "__proto__", "constructor", "buffer"], withMethods: ["filter", "set", "reduce", "sort", "slice", "values", "findIndex", "reverse", "forEach", "map", "keys", "every", "some", "subarray", "reduceRight", "includes", "join", "find", "fill", "indexOf", "entries", "copyWithin", "lastIndexOf"])
}
%NeverOptimizeFunction(main);
main();
