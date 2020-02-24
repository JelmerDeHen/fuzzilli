function main() {
let v2 = 0;
const v3 = v2 + 1;
// v3 = .primitive
v2 = v3;
const v8 = new Uint8ClampedArray(61670);
// v8 = .object(ofGroup: Uint8ClampedArray, withProperties: ["length", "constructor", "buffer", "byteOffset", "__proto__", "byteLength"], withMethods: ["fill", "findIndex", "keys", "forEach", "slice", "some", "set", "copyWithin", "values", "join", "find", "entries", "lastIndexOf", "reverse", "includes", "reduceRight", "every", "indexOf", "sort", "filter", "map", "subarray", "reduce"])
let v14 = 0;
const v15 = Number + 1;
// v15 = .primitive
v14 = v15;
let v19 = 0;
const v20 = v19 + 1;
// v20 = .primitive
v19 = v20;
const v21 = v8.filter(isNaN);
// v21 = .object(ofGroup: Uint8ClampedArray, withProperties: ["byteLength", "constructor", "__proto__", "byteOffset", "length", "buffer"], withMethods: ["copyWithin", "keys", "join", "fill", "includes", "slice", "indexOf", "every", "reduce", "forEach", "set", "values", "lastIndexOf", "some", "reverse", "sort", "entries", "filter", "find", "findIndex", "subarray", "map", "reduceRight"])
let v24 = 0;
}
%NeverOptimizeFunction(main);
main();
