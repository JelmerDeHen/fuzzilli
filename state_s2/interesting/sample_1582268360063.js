function main() {
const v1 = [1337];
// v1 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
let v2 = v1;
let v4 = undefined;
let v8 = 0;
let v11 = 0;
const v12 = v11 + 1;
// v12 = .primitive
const v16 = new Uint8Array(44883);
// v16 = .object(ofGroup: Uint8Array, withProperties: ["buffer", "byteLength", "byteOffset", "length", "__proto__", "constructor"], withMethods: ["copyWithin", "keys", "forEach", "findIndex", "map", "sort", "entries", "subarray", "includes", "set", "reverse", "reduceRight", "join", "values", "fill", "indexOf", "every", "slice", "find", "filter", "some", "reduce", "lastIndexOf"])
const v17 = new Uint32Array(v16);
// v17 = .object(ofGroup: Uint32Array, withProperties: ["__proto__", "buffer", "constructor", "byteOffset", "length", "byteLength"], withMethods: ["reduceRight", "slice", "filter", "fill", "keys", "reverse", "indexOf", "reduce", "lastIndexOf", "includes", "find", "copyWithin", "map", "forEach", "some", "join", "subarray", "values", "every", "entries", "set", "findIndex", "sort"])
v11 = v12;
const v21 = v8 + 1;
// v21 = .primitive
v8 = v21;
}
%NeverOptimizeFunction(main);
main();
