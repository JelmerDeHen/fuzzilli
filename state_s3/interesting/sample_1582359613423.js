function main() {
const v1 = [1337,1337];
// v1 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
let v5 = 0;
const v9 = new Uint8ClampedArray(64);
// v9 = .object(ofGroup: Uint8ClampedArray, withProperties: ["length", "constructor", "byteOffset", "buffer", "byteLength", "__proto__"], withMethods: ["slice", "findIndex", "subarray", "fill", "sort", "forEach", "map", "find", "reverse", "copyWithin", "filter", "every", "reduceRight", "keys", "includes", "entries", "set", "indexOf", "lastIndexOf", "some", "reduce", "join", "values"])
v9.constructor = Uint8Array;
const v11 = v9.slice(v1,1337);
// v11 = .object(ofGroup: Uint8ClampedArray, withProperties: ["length", "constructor", "buffer", "byteOffset", "byteLength", "__proto__"], withMethods: ["reverse", "join", "filter", "findIndex", "includes", "indexOf", "forEach", "some", "find", "reduceRight", "lastIndexOf", "subarray", "keys", "slice", "every", "reduce", "values", "map", "sort", "fill", "copyWithin", "entries", "set"])
}
%NeverOptimizeFunction(main);
main();
