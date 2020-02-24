function main() {
const v2 = "hasInstance"[1073741824];
// v2 = .unknown
const v4 = new Uint16Array(13.37);
// v4 = .object(ofGroup: Uint16Array, withProperties: ["buffer", "byteOffset", "length", "byteLength", "__proto__", "constructor"], withMethods: ["join", "slice", "sort", "reduceRight", "reverse", "forEach", "values", "some", "findIndex", "find", "keys", "map", "filter", "fill", "set", "includes", "subarray", "reduce", "indexOf", "entries", "every", "copyWithin", "lastIndexOf"])
const v5 = v4.sort(v2);
// v5 = .undefined
let v8 = 0;
let v18 = 0;
let v21 = 0;
const v22 = [1337];
// v22 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
let v23 = v22;
}
%NeverOptimizeFunction(main);
main();
