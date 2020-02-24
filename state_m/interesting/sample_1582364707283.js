function main() {
const v1 = [-2.220446049250313e-16,-2.220446049250313e-16];
// v1 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
let v2 = v1;
const v5 = new Float32Array(v2);
// v5 = .object(ofGroup: Float32Array, withProperties: ["constructor", "length", "byteLength", "buffer", "byteOffset", "__proto__"], withMethods: ["values", "copyWithin", "find", "some", "subarray", "findIndex", "reduce", "indexOf", "includes", "forEach", "every", "join", "sort", "reverse", "keys", "entries", "slice", "fill", "map", "lastIndexOf", "filter", "set", "reduceRight"])
v5.constructor = Uint8Array;
const v8 = v5.slice(-9007199254740993,1337);
// v8 = .object(ofGroup: Float32Array, withProperties: ["__proto__", "constructor", "byteOffset", "length", "buffer", "byteLength"], withMethods: ["some", "lastIndexOf", "slice", "entries", "findIndex", "forEach", "every", "reduce", "subarray", "values", "reverse", "reduceRight", "find", "includes", "join", "fill", "map", "sort", "keys", "filter", "set", "copyWithin", "indexOf"])
}
%NeverOptimizeFunction(main);
main();
