function main() {
const v1 = [1337];
// v1 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
let v2 = v1;
let v4 = undefined;
let v8 = 0;
delete Array.length;
let v12 = 0;
const v13 = v12 + 1;
// v13 = .primitive
v12 = v13;
const v14 = v8 + 1;
// v14 = .primitive
v8 = v14;
const v17 = Object.seal(Array);
// v17 = .object()
const v20 = new Int16Array(19873);
// v20 = .object(ofGroup: Int16Array, withProperties: ["byteOffset", "constructor", "byteLength", "__proto__", "length", "buffer"], withMethods: ["includes", "indexOf", "forEach", "filter", "map", "reduceRight", "join", "entries", "sort", "reduce", "lastIndexOf", "set", "keys", "subarray", "slice", "findIndex", "values", "reverse", "some", "every", "copyWithin", "fill", "find"])
}
%NeverOptimizeFunction(main);
main();
