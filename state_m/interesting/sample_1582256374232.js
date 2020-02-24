function main() {
let v1 = Object;
const v2 = v1.getOwnPropertyDescriptors(v1);
// v2 = .object()
let v5 = 0;
const v9 = new Int16Array(19873);
// v9 = .object(ofGroup: Int16Array, withProperties: ["constructor", "buffer", "byteLength", "__proto__", "byteOffset", "length"], withMethods: ["sort", "includes", "indexOf", "entries", "forEach", "filter", "keys", "values", "map", "reverse", "slice", "lastIndexOf", "fill", "join", "set", "every", "some", "copyWithin", "find", "reduce", "subarray", "reduceRight", "findIndex"])
let v11 = 0;
const v12 = {};
// v12 = .object(ofGroup: Object, withProperties: ["__proto__"])
let v15 = 0;
const v16 = v15 + 1;
// v16 = .primitive
v15 = v16;
const v17 = v11 + 1;
// v17 = .primitive
v11 = v17;
let v20 = 0;
const v21 = v20 + 1;
// v21 = .primitive
v20 = v21;
}
%NeverOptimizeFunction(main);
main();
