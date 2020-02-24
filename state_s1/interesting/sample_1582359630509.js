function main() {
const v1 = [1337,1337];
// v1 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
let v5 = 0;
const v9 = new Uint8ClampedArray(64);
// v9 = .object(ofGroup: Uint8ClampedArray, withProperties: ["length", "constructor", "buffer", "byteOffset", "__proto__", "byteLength"], withMethods: ["fill", "findIndex", "keys", "forEach", "slice", "some", "set", "copyWithin", "values", "join", "find", "entries", "lastIndexOf", "reverse", "includes", "reduceRight", "every", "indexOf", "sort", "filter", "map", "subarray", "reduce"])
v9.constructor = Uint8Array;
const v11 = v9.slice(v1,1337);
// v11 = .object(ofGroup: Uint8ClampedArray, withProperties: ["constructor", "byteOffset", "byteLength", "buffer", "__proto__", "length"], withMethods: ["some", "join", "subarray", "find", "entries", "slice", "reverse", "keys", "findIndex", "set", "values", "fill", "indexOf", "forEach", "filter", "map", "sort", "every", "copyWithin", "reduce", "reduceRight", "includes", "lastIndexOf"])
}
%NeverOptimizeFunction(main);
main();
