function main() {
let v1 = undefined;
let v5 = 0;
let v8 = 0;
const v9 = v8 + 1;
// v9 = .primitive
v8 = v9;
const v10 = v5 + 1;
// v10 = .primitive
v5 = v10;
const v14 = [13.37,966929983,13.37,13.37,13.37];
// v14 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v15 = new Uint16Array(v14);
// v15 = .object(ofGroup: Uint16Array, withProperties: ["__proto__", "constructor", "byteOffset", "buffer", "byteLength", "length"], withMethods: ["fill", "reverse", "keys", "forEach", "set", "indexOf", "subarray", "lastIndexOf", "sort", "reduce", "findIndex", "map", "every", "entries", "join", "find", "some", "slice", "values", "includes", "filter", "reduceRight", "copyWithin"])
let v18 = 0;
const v19 = v18 + 1;
// v19 = .primitive
v18 = v19;
let v22 = 0;
v15[1] = v1;
const v23 = v22 + 1;
// v23 = .primitive
v22 = v23;
}
%NeverOptimizeFunction(main);
main();
