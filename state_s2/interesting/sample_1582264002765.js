function main() {
let v1 = undefined;
let v5 = 0;
let v8 = 0;
const v13 = [-2.220446049250313e-16,-2.220446049250313e-16,-2.220446049250313e-16];
// v13 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v15 = new Int32Array(v13);
// v15 = .object(ofGroup: Int32Array, withProperties: ["buffer", "byteOffset", "byteLength", "constructor", "length", "__proto__"], withMethods: ["entries", "copyWithin", "slice", "sort", "reduce", "join", "some", "indexOf", "lastIndexOf", "keys", "find", "forEach", "map", "set", "every", "reduceRight", "fill", "findIndex", "reverse", "includes", "values", "filter", "subarray"])
const v16 = v8 + 1;
// v16 = .primitive
v8 = v16;
const v17 = undefined - 1;
// v17 = .primitive
v5 = v17;
}
%NeverOptimizeFunction(main);
main();
