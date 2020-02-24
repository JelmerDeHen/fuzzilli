function main() {
let v2 = 0;
const v3 = v2 + 1;
// v3 = .primitive
v2 = v3;
const v8 = new Uint8ClampedArray(61670);
// v8 = .object(ofGroup: Uint8ClampedArray, withProperties: ["__proto__", "byteLength", "constructor", "byteOffset", "length", "buffer"], withMethods: ["filter", "forEach", "lastIndexOf", "find", "subarray", "reduce", "indexOf", "join", "entries", "copyWithin", "sort", "slice", "some", "fill", "reverse", "includes", "reduceRight", "values", "keys", "map", "every", "findIndex", "set"])
let v14 = 0;
const v15 = Number + 1;
// v15 = .primitive
v14 = v15;
let v19 = 0;
const v20 = v19 + 1;
// v20 = .primitive
v19 = v20;
const v21 = v8.filter(isNaN);
// v21 = .object(ofGroup: Uint8ClampedArray, withProperties: ["constructor", "__proto__", "buffer", "length", "byteLength", "byteOffset"], withMethods: ["keys", "findIndex", "reverse", "sort", "copyWithin", "reduceRight", "lastIndexOf", "fill", "map", "includes", "filter", "indexOf", "slice", "reduce", "every", "find", "set", "subarray", "some", "join", "values", "entries", "forEach"])
let v24 = 0;
}
%NeverOptimizeFunction(main);
main();
