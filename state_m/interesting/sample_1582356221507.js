function main() {
const v2 = [13.37,13.37,9007199254740992,13.37,13.37];
// v2 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
let v3 = v2;
const v6 = new Float32Array(v3);
// v6 = .object(ofGroup: Float32Array, withProperties: ["constructor", "length", "byteLength", "buffer", "byteOffset", "__proto__"], withMethods: ["values", "copyWithin", "find", "some", "subarray", "findIndex", "reduce", "indexOf", "includes", "forEach", "every", "join", "sort", "reverse", "keys", "entries", "slice", "fill", "map", "lastIndexOf", "filter", "set", "reduceRight"])
v6.constructor = Int8Array;
const v9 = v6.slice(-9007199254740993,1337);
// v9 = .object(ofGroup: Float32Array, withProperties: ["__proto__", "constructor", "byteOffset", "length", "buffer", "byteLength"], withMethods: ["some", "lastIndexOf", "slice", "entries", "findIndex", "forEach", "every", "reduce", "subarray", "values", "reverse", "reduceRight", "find", "includes", "join", "fill", "map", "sort", "keys", "filter", "set", "copyWithin", "indexOf"])
}
%NeverOptimizeFunction(main);
main();
