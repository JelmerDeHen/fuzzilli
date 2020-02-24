function main() {
let v4 = undefined;
const v8 = 2.2250738585072014e-308 / 65537;
// v8 = .number
const v10 = ["matchAll",1337,1337,v8];
// v10 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v14 = new Float64Array(v10);
// v14 = .object(ofGroup: Float64Array, withProperties: ["constructor", "byteOffset", "__proto__", "byteLength", "buffer", "length"], withMethods: ["entries", "every", "some", "indexOf", "subarray", "lastIndexOf", "findIndex", "keys", "map", "reverse", "reduce", "filter", "sort", "slice", "join", "set", "find", "forEach", "copyWithin", "includes", "reduceRight", "values", "fill"])
v14.constructor = Uint8Array;
const v16 = v14.slice(isFinite,234126503);
// v16 = .object(ofGroup: Float64Array, withProperties: ["byteOffset", "length", "constructor", "__proto__", "byteLength", "buffer"], withMethods: ["values", "set", "copyWithin", "map", "every", "includes", "slice", "keys", "some", "join", "reverse", "sort", "indexOf", "entries", "forEach", "filter", "find", "subarray", "fill", "reduceRight", "reduce", "lastIndexOf", "findIndex"])
}
%NeverOptimizeFunction(main);
main();
