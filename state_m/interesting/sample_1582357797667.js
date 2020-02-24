function main() {
const v2 = [13.37];
// v2 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
let v5 = undefined;
const v9 = new Uint8Array(1337);
// v9 = .object(ofGroup: Uint8Array, withProperties: ["length", "byteOffset", "buffer", "__proto__", "constructor", "byteLength"], withMethods: ["keys", "findIndex", "filter", "indexOf", "reduceRight", "sort", "map", "some", "subarray", "reduce", "fill", "lastIndexOf", "set", "values", "entries", "reverse", "every", "includes", "join", "slice", "copyWithin", "forEach", "find"])
v9.constructor = Uint8ClampedArray;
const v10 = v9.slice("arguments",512);
// v10 = .object(ofGroup: Uint8Array, withProperties: ["__proto__", "length", "byteOffset", "constructor", "byteLength", "buffer"], withMethods: ["values", "findIndex", "copyWithin", "fill", "every", "some", "keys", "forEach", "find", "reduceRight", "reverse", "entries", "indexOf", "filter", "includes", "map", "reduce", "lastIndexOf", "sort", "join", "subarray", "slice", "set"])
}
%NeverOptimizeFunction(main);
main();
