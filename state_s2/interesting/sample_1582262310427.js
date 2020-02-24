function main() {
const v2 = [13.37,13.37,13.37,13.37,13.37];
// v2 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v3 = new Float32Array(v2);
// v3 = .object(ofGroup: Float32Array, withProperties: ["byteLength", "length", "__proto__", "buffer", "constructor", "byteOffset"], withMethods: ["includes", "forEach", "findIndex", "lastIndexOf", "reduce", "filter", "some", "entries", "map", "slice", "every", "reverse", "keys", "reduceRight", "copyWithin", "set", "fill", "subarray", "join", "values", "sort", "indexOf", "find"])
let v7 = 0;
const v8 = v7 + 1;
// v8 = .primitive
v7 = v8;
let v11 = 0;
const v12 = v11 + 1;
// v12 = .primitive
v11 = v12;
let v15 = 0;
const v16 = v3.includes(7);
// v16 = .boolean
}
%NeverOptimizeFunction(main);
main();
