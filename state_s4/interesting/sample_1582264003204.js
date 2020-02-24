function main() {
let v1 = undefined;
let v5 = 0;
let v8 = 0;
const v13 = [-2.220446049250313e-16,-2.220446049250313e-16,-2.220446049250313e-16];
// v13 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v15 = new Int32Array(v13);
// v15 = .object(ofGroup: Int32Array, withProperties: ["length", "__proto__", "constructor", "buffer", "byteOffset", "byteLength"], withMethods: ["map", "copyWithin", "forEach", "subarray", "entries", "find", "reduceRight", "set", "filter", "keys", "indexOf", "some", "slice", "reverse", "values", "reduce", "findIndex", "includes", "sort", "fill", "every", "lastIndexOf", "join"])
const v16 = v8 + 1;
// v16 = .primitive
v8 = v16;
const v17 = undefined - 1;
// v17 = .primitive
v5 = v17;
}
%NeverOptimizeFunction(main);
main();
