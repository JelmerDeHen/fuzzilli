function main() {
const v3 = [1337,1337,1337,1337];
// v3 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v4 = {d:gc,valueOf:v3};
// v4 = .object(ofGroup: Object, withProperties: ["valueOf", "__proto__"], withMethods: ["d"])
const v5 = new Int8Array(v4);
// v5 = .object(ofGroup: Int8Array, withProperties: ["byteOffset", "buffer", "length", "byteLength", "__proto__", "constructor"], withMethods: ["reduce", "sort", "copyWithin", "set", "fill", "slice", "reverse", "includes", "lastIndexOf", "join", "find", "entries", "findIndex", "indexOf", "keys", "forEach", "filter", "map", "every", "subarray", "some", "reduceRight", "values"])
const v7 = typeof Int8Array;
// v7 = .string
const v9 = v7 === "string";
// v9 = .boolean
let v12 = 0;
let v15 = 0;
const v16 = v15 + 1;
// v16 = .primitive
v15 = v16;
const v17 = v12 + 1;
// v17 = .primitive
v12 = v17;
const v18 = Object.freeze(v5);
// v18 = .undefined
}
%NeverOptimizeFunction(main);
main();
