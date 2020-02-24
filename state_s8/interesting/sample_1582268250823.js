function main() {
const v3 = [13.37,13.37];
// v3 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v5 = [1337,-65537,"asyncIterator",13.37];
// v5 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v7 = [13.37,13.37,13.37];
// v7 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v9 = new Int8Array(v7);
// v9 = .object(ofGroup: Int8Array, withProperties: ["constructor", "__proto__", "buffer", "length", "byteOffset", "byteLength"], withMethods: ["values", "every", "reverse", "reduce", "lastIndexOf", "slice", "sort", "fill", "indexOf", "copyWithin", "set", "some", "subarray", "filter", "reduceRight", "forEach", "find", "join", "includes", "findIndex", "keys", "entries", "map"])
const v10 = v3 >= v5;
// v10 = .boolean
let v11 = v9;
const v13 = new Uint16Array(v9);
// v13 = .object(ofGroup: Uint16Array, withProperties: ["__proto__", "constructor", "byteOffset", "buffer", "byteLength", "length"], withMethods: ["fill", "reverse", "keys", "forEach", "set", "indexOf", "subarray", "lastIndexOf", "sort", "reduce", "findIndex", "map", "every", "entries", "join", "find", "some", "slice", "values", "includes", "filter", "reduceRight", "copyWithin"])
const v14 = v13.set(v9);
// v14 = .undefined
}
%NeverOptimizeFunction(main);
main();
