function main() {
const v1 = [1337,1337,1337];
// v1 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v4 = new Float32Array(v1);
// v4 = .object(ofGroup: Float32Array, withProperties: ["__proto__", "buffer", "constructor", "length", "byteLength", "byteOffset"], withMethods: ["sort", "some", "indexOf", "find", "subarray", "set", "reverse", "reduce", "join", "values", "keys", "entries", "map", "copyWithin", "includes", "findIndex", "slice", "reduceRight", "lastIndexOf", "filter", "every", "fill", "forEach"])
v4.constructor = Uint8ClampedArray;
const v6 = v4.slice(v4,1337);
// v6 = .object(ofGroup: Float32Array, withProperties: ["buffer", "byteLength", "constructor", "byteOffset", "length", "__proto__"], withMethods: ["set", "entries", "reduce", "lastIndexOf", "map", "join", "values", "sort", "some", "includes", "keys", "reverse", "find", "filter", "every", "copyWithin", "fill", "findIndex", "forEach", "subarray", "reduceRight", "indexOf", "slice"])
let v10 = 0;
let v13 = 0;
const v14 = v13 + 1;
// v14 = .primitive
v13 = v14;
}
%NeverOptimizeFunction(main);
main();
