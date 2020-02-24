function main() {
const v1 = [1337,1337,1337,1337,1337];
// v1 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v5 = new Int8Array(30818);
// v5 = .object(ofGroup: Int8Array, withProperties: ["byteOffset", "constructor", "buffer", "byteLength", "__proto__", "length"], withMethods: ["values", "copyWithin", "fill", "join", "keys", "sort", "entries", "forEach", "subarray", "some", "map", "reduceRight", "reduce", "lastIndexOf", "filter", "findIndex", "reverse", "every", "set", "includes", "find", "slice", "indexOf"])
let v6 = 10;
const v8 = [Int8Array,v5,v1,-3.0,-3.0];
// v8 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v9 = v8[v6];
// v9 = .unknown
const v10 = new Int8Array(v8);
// v10 = .object(ofGroup: Int8Array, withProperties: ["byteOffset", "constructor", "buffer", "byteLength", "__proto__", "length"], withMethods: ["values", "copyWithin", "fill", "join", "keys", "sort", "entries", "forEach", "subarray", "some", "map", "reduceRight", "reduce", "lastIndexOf", "filter", "findIndex", "reverse", "every", "set", "includes", "find", "slice", "indexOf"])
const v11 = v10.sort(v9);
// v11 = .undefined
}
%NeverOptimizeFunction(main);
main();
