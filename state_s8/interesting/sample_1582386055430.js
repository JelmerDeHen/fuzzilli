function main() {
const v2 = [13.37,13.37,13.37,13.37,13.37];
// v2 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v5 = [1337,1337,1337,1337,"d"];
// v5 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v9 = new Uint8Array(1337);
// v9 = .object(ofGroup: Uint8Array, withProperties: ["length", "byteLength", "buffer", "__proto__", "byteOffset", "constructor"], withMethods: ["fill", "slice", "findIndex", "reverse", "indexOf", "filter", "map", "copyWithin", "set", "find", "keys", "forEach", "subarray", "every", "reduce", "entries", "join", "lastIndexOf", "values", "sort", "some", "reduceRight", "includes"])
const v11 = v9.slice(v5,65535);
// v11 = .object(ofGroup: Uint8Array, withProperties: ["constructor", "byteOffset", "__proto__", "buffer", "byteLength", "length"], withMethods: ["reduceRight", "subarray", "lastIndexOf", "values", "fill", "map", "reverse", "slice", "indexOf", "filter", "every", "some", "find", "forEach", "join", "findIndex", "keys", "copyWithin", "sort", "includes", "reduce", "entries", "set"])
const v13 = [1337,1337,1337];
// v13 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v14 = {b:v13};
// v14 = .object(ofGroup: Object, withProperties: ["__proto__", "b"])
const v15 = {d:v14,length:3253023065,valueOf:1337,a:13.37,e:3253023065,__proto__:v2};
// v15 = .object(ofGroup: Object, withProperties: ["valueOf", "__proto__", "d", "length", "e", "a"])
const v16 = v15.fill(v11,v11,Float32Array,v5);
// v16 = .unknown
const v17 = typeof Float32Array;
// v17 = .string
const v19 = v17 === "undefined";
// v19 = .boolean
}
%NeverOptimizeFunction(main);
main();
