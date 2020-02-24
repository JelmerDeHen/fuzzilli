function main() {
const v1 = [1337,1337];
// v1 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
let v5 = 0;
const v9 = new Uint8ClampedArray(64);
// v9 = .object(ofGroup: Uint8ClampedArray, withProperties: ["buffer", "constructor", "byteLength", "length", "__proto__", "byteOffset"], withMethods: ["forEach", "map", "lastIndexOf", "every", "slice", "values", "subarray", "join", "fill", "filter", "copyWithin", "sort", "some", "reduceRight", "entries", "set", "findIndex", "reverse", "reduce", "find", "includes", "indexOf", "keys"])
v9.constructor = Uint8Array;
const v11 = v9.slice(v1,1337);
// v11 = .object(ofGroup: Uint8ClampedArray, withProperties: ["byteOffset", "buffer", "byteLength", "__proto__", "constructor", "length"], withMethods: ["fill", "reverse", "indexOf", "forEach", "reduceRight", "values", "findIndex", "sort", "filter", "every", "reduce", "lastIndexOf", "keys", "subarray", "includes", "copyWithin", "entries", "map", "set", "some", "join", "find", "slice"])
}
%NeverOptimizeFunction(main);
main();
