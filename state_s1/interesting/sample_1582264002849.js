function main() {
let v1 = undefined;
let v5 = 0;
let v8 = 0;
const v13 = [-2.220446049250313e-16,-2.220446049250313e-16,-2.220446049250313e-16];
// v13 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v15 = new Int32Array(v13);
// v15 = .object(ofGroup: Int32Array, withProperties: ["__proto__", "buffer", "length", "constructor", "byteOffset", "byteLength"], withMethods: ["filter", "map", "reverse", "slice", "some", "join", "forEach", "fill", "every", "sort", "find", "set", "includes", "entries", "subarray", "indexOf", "reduceRight", "lastIndexOf", "reduce", "values", "keys", "copyWithin", "findIndex"])
const v16 = v8 + 1;
// v16 = .primitive
v8 = v16;
const v17 = undefined - 1;
// v17 = .primitive
v5 = v17;
}
%NeverOptimizeFunction(main);
main();
