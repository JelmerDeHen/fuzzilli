function main() {
const v4 = [1337,1337,1337];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v5 = [v4,"cUoQ2Cq+0j",ArrayBuffer,9007199254740992];
// v5 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v8 = new Uint8Array(v5);
// v8 = .object(ofGroup: Uint8Array, withProperties: ["byteOffset", "length", "constructor", "byteLength", "buffer", "__proto__"], withMethods: ["findIndex", "set", "reduce", "reduceRight", "indexOf", "keys", "subarray", "values", "sort", "lastIndexOf", "forEach", "map", "copyWithin", "entries", "find", "reverse", "includes", "some", "join", "fill", "slice", "filter", "every"])
v8.constructor = Uint32Array;
const v11 = v8.slice(-9007199254740993,1337);
// v11 = .object(ofGroup: Uint8Array, withProperties: ["__proto__", "byteOffset", "byteLength", "constructor", "length", "buffer"], withMethods: ["sort", "set", "map", "reduce", "reverse", "entries", "filter", "subarray", "includes", "find", "join", "values", "copyWithin", "findIndex", "keys", "some", "fill", "forEach", "reduceRight", "slice", "indexOf", "every", "lastIndexOf"])
}
%NeverOptimizeFunction(main);
main();