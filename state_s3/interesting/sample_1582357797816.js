function main() {
const v2 = [13.37];
// v2 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
let v5 = undefined;
const v9 = new Uint8Array(1337);
// v9 = .object(ofGroup: Uint8Array, withProperties: ["__proto__", "constructor", "length", "buffer", "byteOffset", "byteLength"], withMethods: ["map", "includes", "every", "reduceRight", "find", "filter", "lastIndexOf", "indexOf", "subarray", "join", "fill", "sort", "slice", "findIndex", "reverse", "forEach", "reduce", "values", "copyWithin", "entries", "keys", "set", "some"])
v9.constructor = Uint8ClampedArray;
const v10 = v9.slice("arguments",512);
// v10 = .object(ofGroup: Uint8Array, withProperties: ["__proto__", "byteLength", "constructor", "byteOffset", "buffer", "length"], withMethods: ["keys", "reverse", "slice", "includes", "filter", "every", "find", "indexOf", "lastIndexOf", "entries", "join", "findIndex", "set", "values", "forEach", "subarray", "copyWithin", "reduceRight", "map", "reduce", "some", "sort", "fill"])
}
%NeverOptimizeFunction(main);
main();
