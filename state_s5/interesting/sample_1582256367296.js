function main() {
let v1 = Object;
const v2 = v1.getOwnPropertyDescriptors(v1);
// v2 = .object()
let v5 = 0;
const v9 = new Int16Array(19873);
// v9 = .object(ofGroup: Int16Array, withProperties: ["length", "byteLength", "__proto__", "byteOffset", "constructor", "buffer"], withMethods: ["lastIndexOf", "fill", "join", "reduce", "some", "findIndex", "entries", "map", "slice", "reverse", "sort", "set", "indexOf", "find", "copyWithin", "subarray", "includes", "values", "keys", "filter", "forEach", "every", "reduceRight"])
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
