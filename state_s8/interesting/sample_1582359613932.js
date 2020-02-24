function main() {
const v1 = [1337,1337];
// v1 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
let v5 = 0;
const v9 = new Uint8ClampedArray(64);
// v9 = .object(ofGroup: Uint8ClampedArray, withProperties: ["byteOffset", "__proto__", "buffer", "length", "byteLength", "constructor"], withMethods: ["every", "reduce", "indexOf", "reverse", "map", "join", "entries", "reduceRight", "subarray", "includes", "sort", "some", "values", "copyWithin", "filter", "lastIndexOf", "set", "fill", "find", "findIndex", "keys", "forEach", "slice"])
v9.constructor = Uint8Array;
const v11 = v9.slice(v1,1337);
// v11 = .object(ofGroup: Uint8ClampedArray, withProperties: ["length", "constructor", "buffer", "__proto__", "byteLength", "byteOffset"], withMethods: ["some", "reverse", "find", "map", "keys", "findIndex", "filter", "every", "subarray", "indexOf", "join", "reduce", "values", "set", "entries", "forEach", "reduceRight", "slice", "lastIndexOf", "includes", "fill", "copyWithin", "sort"])
}
%NeverOptimizeFunction(main);
main();
