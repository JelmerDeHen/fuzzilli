function main() {
const v2 = [1337,1337,1337,1337,eval];
// v2 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v6 = new Uint8ClampedArray(512);
// v6 = .object(ofGroup: Uint8ClampedArray, withProperties: ["constructor", "byteLength", "__proto__", "buffer", "length", "byteOffset"], withMethods: ["slice", "reduceRight", "findIndex", "every", "copyWithin", "set", "fill", "sort", "forEach", "entries", "join", "values", "keys", "map", "reverse", "indexOf", "subarray", "reduce", "find", "includes", "lastIndexOf", "filter", "some"])
v6.constructor = Uint32Array;
const v8 = v6.slice(v2,1337);
// v8 = .object(ofGroup: Uint8ClampedArray, withProperties: ["length", "byteOffset", "constructor", "buffer", "byteLength", "__proto__"], withMethods: ["reverse", "findIndex", "keys", "reduceRight", "sort", "slice", "indexOf", "includes", "fill", "copyWithin", "entries", "set", "some", "every", "subarray", "find", "filter", "map", "join", "lastIndexOf", "reduce", "forEach", "values"])
}
%NeverOptimizeFunction(main);
main();
