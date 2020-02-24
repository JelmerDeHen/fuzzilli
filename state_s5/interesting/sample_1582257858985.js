function main() {
let v2 = 0;
const v3 = v2 + 1;
// v3 = .primitive
v2 = v3;
const v8 = new Uint8ClampedArray(61670);
// v8 = .object(ofGroup: Uint8ClampedArray, withProperties: ["buffer", "length", "byteLength", "constructor", "__proto__", "byteOffset"], withMethods: ["join", "values", "reduceRight", "find", "reverse", "fill", "indexOf", "entries", "forEach", "subarray", "findIndex", "every", "set", "reduce", "slice", "filter", "copyWithin", "keys", "lastIndexOf", "sort", "map", "some", "includes"])
let v14 = 0;
const v15 = Number + 1;
// v15 = .primitive
v14 = v15;
let v19 = 0;
const v20 = v19 + 1;
// v20 = .primitive
v19 = v20;
const v21 = v8.filter(isNaN);
// v21 = .object(ofGroup: Uint8ClampedArray, withProperties: ["buffer", "byteOffset", "byteLength", "constructor", "__proto__", "length"], withMethods: ["join", "reverse", "fill", "findIndex", "map", "some", "entries", "find", "values", "slice", "keys", "filter", "reduceRight", "sort", "includes", "forEach", "reduce", "indexOf", "lastIndexOf", "set", "copyWithin", "every", "subarray"])
let v24 = 0;
}
%NeverOptimizeFunction(main);
main();
