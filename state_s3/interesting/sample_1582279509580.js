function main() {
let v3 = 0;
const v4 = undefined + 1;
// v4 = .primitive
v3 = v4;
const v8 = [13.37,-215833.7714811623,-215833.7714811623];
// v8 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v9 = v8.keys();
// v9 = .object()
const v10 = new Uint16Array(v9);
// v10 = .object(ofGroup: Uint16Array, withProperties: ["__proto__", "byteOffset", "length", "constructor", "buffer", "byteLength"], withMethods: ["entries", "join", "lastIndexOf", "forEach", "filter", "slice", "reduce", "reverse", "findIndex", "keys", "fill", "map", "every", "set", "reduceRight", "includes", "sort", "find", "subarray", "indexOf", "values", "some", "copyWithin"])
const v12 = v10.includes(undefined,0);
// v12 = .boolean
}
%NeverOptimizeFunction(main);
main();
