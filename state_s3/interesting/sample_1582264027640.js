function main() {
let v1 = undefined;
let v5 = 0;
let v8 = 0;
const v13 = [-2.220446049250313e-16,-2.220446049250313e-16,-2.220446049250313e-16];
// v13 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v15 = new Int32Array(v13);
// v15 = .object(ofGroup: Int32Array, withProperties: ["__proto__", "constructor", "length", "byteOffset", "byteLength", "buffer"], withMethods: ["sort", "forEach", "filter", "fill", "lastIndexOf", "reduce", "map", "reduceRight", "find", "keys", "every", "set", "join", "values", "subarray", "copyWithin", "slice", "indexOf", "reverse", "entries", "findIndex", "some", "includes"])
const v16 = v8 + 1;
// v16 = .primitive
v8 = v16;
const v17 = undefined - 1;
// v17 = .primitive
v5 = v17;
}
%NeverOptimizeFunction(main);
main();
