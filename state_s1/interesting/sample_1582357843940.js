function main() {
const v2 = [13.37];
// v2 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
let v5 = undefined;
const v9 = new Uint8Array(1337);
// v9 = .object(ofGroup: Uint8Array, withProperties: ["byteLength", "__proto__", "byteOffset", "length", "buffer", "constructor"], withMethods: ["reverse", "copyWithin", "forEach", "filter", "some", "indexOf", "lastIndexOf", "slice", "values", "every", "fill", "subarray", "findIndex", "keys", "reduceRight", "includes", "map", "reduce", "join", "sort", "set", "find", "entries"])
v9.constructor = Uint8ClampedArray;
const v10 = v9.slice("arguments",512);
// v10 = .object(ofGroup: Uint8Array, withProperties: ["__proto__", "length", "buffer", "byteLength", "constructor", "byteOffset"], withMethods: ["copyWithin", "forEach", "set", "reduce", "reduceRight", "map", "subarray", "find", "every", "findIndex", "filter", "indexOf", "fill", "includes", "join", "entries", "some", "keys", "lastIndexOf", "values", "slice", "sort", "reverse"])
}
%NeverOptimizeFunction(main);
main();
