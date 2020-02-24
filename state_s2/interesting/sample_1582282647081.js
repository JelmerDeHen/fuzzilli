function main() {
let v2 = 0;
const v3 = v2 + 1;
// v3 = .primitive
v2 = v3;
let v11 = 9007199254740991;
const v12 = [2.220446049250313e-16];
// v12 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v14 = new Float64Array(v12);
// v14 = .object(ofGroup: Float64Array, withProperties: ["length", "constructor", "buffer", "byteLength", "byteOffset", "__proto__"], withMethods: ["forEach", "indexOf", "keys", "subarray", "fill", "find", "slice", "entries", "filter", "every", "set", "some", "reduceRight", "join", "reverse", "reduce", "copyWithin", "findIndex", "sort", "map", "includes", "lastIndexOf", "values"])
const v15 = new Uint32Array(v14);
// v15 = .object(ofGroup: Uint32Array, withProperties: ["__proto__", "buffer", "constructor", "byteOffset", "length", "byteLength"], withMethods: ["reduceRight", "slice", "filter", "fill", "keys", "reverse", "indexOf", "reduce", "lastIndexOf", "includes", "find", "copyWithin", "map", "forEach", "some", "join", "subarray", "values", "every", "entries", "set", "findIndex", "sort"])
}
%NeverOptimizeFunction(main);
main();
