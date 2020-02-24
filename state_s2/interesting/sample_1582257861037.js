function main() {
let v2 = 0;
const v3 = v2 + 1;
// v3 = .primitive
v2 = v3;
const v8 = new Uint8ClampedArray(61670);
// v8 = .object(ofGroup: Uint8ClampedArray, withProperties: ["byteLength", "__proto__", "byteOffset", "constructor", "length", "buffer"], withMethods: ["entries", "every", "lastIndexOf", "values", "reverse", "map", "copyWithin", "subarray", "reduce", "filter", "sort", "find", "keys", "reduceRight", "join", "forEach", "fill", "set", "indexOf", "some", "includes", "findIndex", "slice"])
let v14 = 0;
const v15 = Number + 1;
// v15 = .primitive
v14 = v15;
let v19 = 0;
const v20 = v19 + 1;
// v20 = .primitive
v19 = v20;
const v21 = v8.filter(isNaN);
// v21 = .object(ofGroup: Uint8ClampedArray, withProperties: ["__proto__", "byteOffset", "length", "buffer", "constructor", "byteLength"], withMethods: ["copyWithin", "findIndex", "reverse", "fill", "lastIndexOf", "join", "forEach", "reduceRight", "every", "find", "indexOf", "entries", "subarray", "set", "some", "map", "slice", "keys", "sort", "includes", "filter", "reduce", "values"])
let v24 = 0;
}
%NeverOptimizeFunction(main);
main();
