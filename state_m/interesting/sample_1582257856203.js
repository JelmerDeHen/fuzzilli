function main() {
let v2 = 0;
const v3 = v2 + 1;
// v3 = .primitive
v2 = v3;
const v8 = new Uint8ClampedArray(61670);
// v8 = .object(ofGroup: Uint8ClampedArray, withProperties: ["constructor", "byteLength", "__proto__", "buffer", "length", "byteOffset"], withMethods: ["slice", "reduceRight", "findIndex", "every", "copyWithin", "set", "fill", "sort", "forEach", "entries", "join", "values", "keys", "map", "reverse", "indexOf", "subarray", "reduce", "find", "includes", "lastIndexOf", "filter", "some"])
let v14 = 0;
const v15 = Number + 1;
// v15 = .primitive
v14 = v15;
let v19 = 0;
const v20 = v19 + 1;
// v20 = .primitive
v19 = v20;
const v21 = v8.filter(isNaN);
// v21 = .object(ofGroup: Uint8ClampedArray, withProperties: ["constructor", "buffer", "byteOffset", "byteLength", "length", "__proto__"], withMethods: ["reduce", "sort", "indexOf", "filter", "lastIndexOf", "forEach", "join", "every", "fill", "slice", "find", "includes", "keys", "reduceRight", "copyWithin", "reverse", "findIndex", "subarray", "values", "entries", "some", "map", "set"])
let v24 = 0;
}
%NeverOptimizeFunction(main);
main();
