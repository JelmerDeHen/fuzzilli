function main() {
let v2 = 0;
const v3 = v2 + 1;
// v3 = .primitive
v2 = v3;
const v8 = new Uint8ClampedArray(61670);
// v8 = .object(ofGroup: Uint8ClampedArray, withProperties: ["buffer", "constructor", "byteLength", "length", "__proto__", "byteOffset"], withMethods: ["forEach", "map", "lastIndexOf", "every", "slice", "values", "subarray", "join", "fill", "filter", "copyWithin", "sort", "some", "reduceRight", "entries", "set", "findIndex", "reverse", "reduce", "find", "includes", "indexOf", "keys"])
let v14 = 0;
const v15 = Number + 1;
// v15 = .primitive
v14 = v15;
let v19 = 0;
const v20 = v19 + 1;
// v20 = .primitive
v19 = v20;
const v21 = v8.filter(isNaN);
// v21 = .object(ofGroup: Uint8ClampedArray, withProperties: ["__proto__", "length", "buffer", "byteLength", "byteOffset", "constructor"], withMethods: ["forEach", "sort", "join", "indexOf", "map", "reverse", "fill", "slice", "entries", "includes", "every", "keys", "reduce", "lastIndexOf", "find", "set", "findIndex", "filter", "copyWithin", "subarray", "some", "reduceRight", "values"])
let v24 = 0;
}
%NeverOptimizeFunction(main);
main();
