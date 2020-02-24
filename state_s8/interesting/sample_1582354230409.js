function main() {
const v1 = [13.37,13.37];
// v1 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
let v2 = v1;
const v5 = new Uint8Array(v2);
// v5 = .object(ofGroup: Uint8Array, withProperties: ["length", "byteLength", "buffer", "__proto__", "byteOffset", "constructor"], withMethods: ["fill", "slice", "findIndex", "reverse", "indexOf", "filter", "map", "copyWithin", "set", "find", "keys", "forEach", "subarray", "every", "reduce", "entries", "join", "lastIndexOf", "values", "sort", "some", "reduceRight", "includes"])
v5.constructor = Uint8ClampedArray;
const v8 = v5.slice(-9007199254740993,1337);
// v8 = .object(ofGroup: Uint8Array, withProperties: ["constructor", "byteOffset", "__proto__", "buffer", "byteLength", "length"], withMethods: ["reduceRight", "subarray", "lastIndexOf", "values", "fill", "map", "reverse", "slice", "indexOf", "filter", "every", "some", "find", "forEach", "join", "findIndex", "keys", "copyWithin", "sort", "includes", "reduce", "entries", "set"])
}
%NeverOptimizeFunction(main);
main();
