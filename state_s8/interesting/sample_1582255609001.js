function main() {
const v4 = Object();
// v4 = .object()
const v9 = [13.37,13.37];
// v9 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v11 = v9[1024];
// v11 = .unknown
let v14 = 0;
let v17 = 0;
let v20 = 0;
const v21 = v20 + 1;
// v21 = .primitive
v20 = v21;
let v24 = 0;
const v28 = v17 + 1;
// v28 = .primitive
v17 = v28;
let v29 = v4;
const v30 = 1337 || 1337;
// v30 = .boolean
v29 = v30;
const v33 = new Int16Array(65325);
// v33 = .object(ofGroup: Int16Array, withProperties: ["byteOffset", "constructor", "byteLength", "__proto__", "length", "buffer"], withMethods: ["includes", "indexOf", "forEach", "filter", "map", "reduceRight", "join", "entries", "sort", "reduce", "lastIndexOf", "set", "keys", "subarray", "slice", "findIndex", "values", "reverse", "some", "every", "copyWithin", "fill", "find"])
v33[3156875969] = v29;
const v34 = v14 + 1;
// v34 = .primitive
v14 = v34;
}
%NeverOptimizeFunction(main);
main();
