function main() {
const v1 = [1337,1337,1337];
// v1 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v4 = new Float32Array(v1);
// v4 = .object(ofGroup: Float32Array, withProperties: ["constructor", "length", "byteLength", "buffer", "byteOffset", "__proto__"], withMethods: ["values", "copyWithin", "find", "some", "subarray", "findIndex", "reduce", "indexOf", "includes", "forEach", "every", "join", "sort", "reverse", "keys", "entries", "slice", "fill", "map", "lastIndexOf", "filter", "set", "reduceRight"])
v4.constructor = Uint8ClampedArray;
const v6 = v4.slice(v4,1337);
// v6 = .object(ofGroup: Float32Array, withProperties: ["__proto__", "constructor", "byteOffset", "length", "buffer", "byteLength"], withMethods: ["some", "lastIndexOf", "slice", "entries", "findIndex", "forEach", "every", "reduce", "subarray", "values", "reverse", "reduceRight", "find", "includes", "join", "fill", "map", "sort", "keys", "filter", "set", "copyWithin", "indexOf"])
let v10 = 0;
let v13 = 0;
const v14 = v13 + 1;
// v14 = .primitive
v13 = v14;
}
%NeverOptimizeFunction(main);
main();
