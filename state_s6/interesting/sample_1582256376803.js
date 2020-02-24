function main() {
let v1 = Object;
const v2 = v1.getOwnPropertyDescriptors(v1);
// v2 = .object()
let v5 = 0;
const v9 = new Int16Array(19873);
// v9 = .object(ofGroup: Int16Array, withProperties: ["constructor", "byteOffset", "byteLength", "__proto__", "buffer", "length"], withMethods: ["sort", "entries", "findIndex", "slice", "subarray", "map", "find", "every", "some", "join", "copyWithin", "includes", "filter", "lastIndexOf", "values", "reduce", "set", "indexOf", "reduceRight", "forEach", "fill", "reverse", "keys"])
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
