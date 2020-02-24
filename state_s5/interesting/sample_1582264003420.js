function main() {
let v1 = undefined;
let v5 = 0;
let v8 = 0;
const v13 = [-2.220446049250313e-16,-2.220446049250313e-16,-2.220446049250313e-16];
// v13 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v15 = new Int32Array(v13);
// v15 = .object(ofGroup: Int32Array, withProperties: ["constructor", "buffer", "byteOffset", "byteLength", "__proto__", "length"], withMethods: ["find", "sort", "indexOf", "subarray", "entries", "reduce", "reverse", "values", "keys", "forEach", "set", "filter", "findIndex", "includes", "join", "slice", "copyWithin", "reduceRight", "fill", "map", "lastIndexOf", "some", "every"])
const v16 = v8 + 1;
// v16 = .primitive
v8 = v16;
const v17 = undefined - 1;
// v17 = .primitive
v5 = v17;
}
%NeverOptimizeFunction(main);
main();
