function main() {
let v6 = 0;
let v9 = 0;
let v12 = 0;
const v30 = 1337 == 13.37;
// v30 = .boolean
const v32 = Object();
// v32 = .object()
let v36 = 0;
let v39 = 0;
const v40 = v39 + 1;
// v40 = .primitive
v39 = v40;
const v41 = v36 + 1;
// v41 = .primitive
v36 = v41;
const v46 = [1337,1337];
// v46 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v49 = new Int16Array(v46);
// v49 = .object(ofGroup: Int16Array, withProperties: ["__proto__", "buffer", "length", "byteLength", "byteOffset", "constructor"], withMethods: ["keys", "reduce", "indexOf", "map", "set", "join", "slice", "reduceRight", "lastIndexOf", "entries", "values", "reverse", "sort", "find", "findIndex", "forEach", "every", "some", "copyWithin", "fill", "includes", "subarray", "filter"])
const v50 = new Uint8Array(v49);
// v50 = .object(ofGroup: Uint8Array, withProperties: ["constructor", "__proto__", "buffer", "length", "byteOffset", "byteLength"], withMethods: ["copyWithin", "includes", "reduceRight", "reverse", "indexOf", "fill", "findIndex", "set", "subarray", "sort", "forEach", "slice", "entries", "filter", "join", "every", "some", "keys", "lastIndexOf", "reduce", "values", "find", "map"])
}
%NeverOptimizeFunction(main);
main();
