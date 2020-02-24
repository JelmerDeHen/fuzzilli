function main() {
const v2 = [13.37];
// v2 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
let v5 = undefined;
const v9 = new Uint8Array(1337);
// v9 = .object(ofGroup: Uint8Array, withProperties: ["__proto__", "constructor", "length", "byteOffset", "byteLength", "buffer"], withMethods: ["copyWithin", "filter", "reverse", "includes", "findIndex", "every", "subarray", "keys", "set", "some", "reduce", "reduceRight", "join", "sort", "indexOf", "entries", "forEach", "values", "lastIndexOf", "find", "slice", "fill", "map"])
v9.constructor = Uint8ClampedArray;
const v10 = v9.slice("arguments",512);
// v10 = .object(ofGroup: Uint8Array, withProperties: ["constructor", "length", "byteOffset", "byteLength", "__proto__", "buffer"], withMethods: ["some", "subarray", "lastIndexOf", "find", "filter", "findIndex", "slice", "indexOf", "map", "reduceRight", "join", "forEach", "every", "entries", "set", "copyWithin", "sort", "keys", "values", "reduce", "reverse", "includes", "fill"])
}
%NeverOptimizeFunction(main);
main();
