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
// v46 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v49 = new Int16Array(v46);
// v49 = .object(ofGroup: Int16Array, withProperties: ["length", "byteLength", "__proto__", "byteOffset", "constructor", "buffer"], withMethods: ["lastIndexOf", "fill", "join", "reduce", "some", "findIndex", "entries", "map", "slice", "reverse", "sort", "set", "indexOf", "find", "copyWithin", "subarray", "includes", "values", "keys", "filter", "forEach", "every", "reduceRight"])
const v50 = new Uint8Array(v49);
// v50 = .object(ofGroup: Uint8Array, withProperties: ["__proto__", "constructor", "length", "byteOffset", "byteLength", "buffer"], withMethods: ["copyWithin", "filter", "reverse", "includes", "findIndex", "every", "subarray", "keys", "set", "some", "reduce", "reduceRight", "join", "sort", "indexOf", "entries", "forEach", "values", "lastIndexOf", "find", "slice", "fill", "map"])
}
%NeverOptimizeFunction(main);
main();
