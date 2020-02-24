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
// v14 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v15 = new Uint16Array(v14);
// v15 = .object(ofGroup: Uint16Array, withProperties: ["byteLength", "__proto__", "length", "buffer", "byteOffset", "constructor"], withMethods: ["every", "findIndex", "reduceRight", "some", "values", "find", "fill", "forEach", "map", "filter", "reduce", "join", "subarray", "includes", "lastIndexOf", "indexOf", "keys", "copyWithin", "sort", "set", "entries", "reverse", "slice"])
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
