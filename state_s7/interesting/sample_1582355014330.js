function main() {
const v1 = [1337,1337,1337];
// v1 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v4 = new Float32Array(v1);
// v4 = .object(ofGroup: Float32Array, withProperties: ["byteOffset", "byteLength", "constructor", "buffer", "length", "__proto__"], withMethods: ["filter", "every", "fill", "copyWithin", "slice", "includes", "entries", "reduceRight", "indexOf", "sort", "map", "lastIndexOf", "find", "values", "reverse", "reduce", "findIndex", "join", "keys", "some", "set", "subarray", "forEach"])
v4.constructor = Uint8ClampedArray;
const v6 = v4.slice(v4,1337);
// v6 = .object(ofGroup: Float32Array, withProperties: ["__proto__", "byteOffset", "byteLength", "buffer", "length", "constructor"], withMethods: ["every", "subarray", "join", "lastIndexOf", "findIndex", "reverse", "map", "entries", "find", "keys", "set", "indexOf", "reduce", "some", "includes", "copyWithin", "sort", "slice", "forEach", "reduceRight", "values", "filter", "fill"])
let v10 = 0;
let v13 = 0;
const v14 = v13 + 1;
// v14 = .primitive
v13 = v14;
}
%NeverOptimizeFunction(main);
main();
