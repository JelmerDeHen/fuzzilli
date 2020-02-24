function main() {
let v3 = 0;
const v4 = undefined + 1;
// v4 = .primitive
v3 = v4;
const v8 = [13.37,-215833.7714811623,-215833.7714811623];
// v8 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v9 = v8.keys();
// v9 = .object()
const v10 = new Uint16Array(v9);
// v10 = .object(ofGroup: Uint16Array, withProperties: ["__proto__", "buffer", "byteLength", "byteOffset", "constructor", "length"], withMethods: ["set", "filter", "some", "sort", "reduce", "lastIndexOf", "fill", "indexOf", "slice", "keys", "reverse", "every", "includes", "values", "entries", "findIndex", "subarray", "reduceRight", "map", "copyWithin", "find", "join", "forEach"])
const v12 = v10.includes(undefined,0);
// v12 = .boolean
}
%NeverOptimizeFunction(main);
main();
