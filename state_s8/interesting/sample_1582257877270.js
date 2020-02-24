function main() {
let v2 = 0;
const v3 = v2 + 1;
// v3 = .primitive
v2 = v3;
const v8 = new Uint8ClampedArray(61670);
// v8 = .object(ofGroup: Uint8ClampedArray, withProperties: ["byteOffset", "__proto__", "buffer", "length", "byteLength", "constructor"], withMethods: ["every", "reduce", "indexOf", "reverse", "map", "join", "entries", "reduceRight", "subarray", "includes", "sort", "some", "values", "copyWithin", "filter", "lastIndexOf", "set", "fill", "find", "findIndex", "keys", "forEach", "slice"])
let v14 = 0;
const v15 = Number + 1;
// v15 = .primitive
v14 = v15;
let v19 = 0;
const v20 = v19 + 1;
// v20 = .primitive
v19 = v20;
const v21 = v8.filter(isNaN);
// v21 = .object(ofGroup: Uint8ClampedArray, withProperties: ["buffer", "__proto__", "length", "constructor", "byteLength", "byteOffset"], withMethods: ["join", "copyWithin", "entries", "some", "lastIndexOf", "keys", "find", "reduce", "values", "reverse", "map", "every", "findIndex", "filter", "subarray", "fill", "indexOf", "slice", "forEach", "sort", "set", "reduceRight", "includes"])
let v24 = 0;
}
%NeverOptimizeFunction(main);
main();
