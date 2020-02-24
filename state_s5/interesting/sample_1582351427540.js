function main() {
const v4 = new Uint32Array(637);
// v4 = .object(ofGroup: Uint32Array, withProperties: ["buffer", "length", "byteLength", "constructor", "byteOffset", "__proto__"], withMethods: ["some", "copyWithin", "reduce", "lastIndexOf", "forEach", "indexOf", "findIndex", "fill", "slice", "every", "set", "join", "values", "filter", "reverse", "subarray", "sort", "reduceRight", "includes", "keys", "map", "find", "entries"])
const v6 = [1337,1337,1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v7 = [];
// v7 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v8 = {toString:v7,e:13.37,c:13.37,b:v7,a:"bYrEyLkhjA",valueOf:v6};
// v8 = .object(ofGroup: Object, withProperties: ["e", "a", "toString", "__proto__", "valueOf", "b", "c"])
const v11 = new Uint32Array(v4);
// v11 = .object(ofGroup: Uint32Array, withProperties: ["buffer", "length", "byteLength", "constructor", "byteOffset", "__proto__"], withMethods: ["some", "copyWithin", "reduce", "lastIndexOf", "forEach", "indexOf", "findIndex", "fill", "slice", "every", "set", "join", "values", "filter", "reverse", "subarray", "sort", "reduceRight", "includes", "keys", "map", "find", "entries"])
v11.constructor = Int16Array;
const v14 = v11.slice(-2147483649,1337);
// v14 = .object(ofGroup: Uint32Array, withProperties: ["__proto__", "buffer", "byteOffset", "byteLength", "length", "constructor"], withMethods: ["values", "copyWithin", "slice", "every", "map", "filter", "keys", "entries", "find", "subarray", "sort", "findIndex", "includes", "forEach", "reduceRight", "set", "join", "some", "indexOf", "lastIndexOf", "fill", "reduce", "reverse"])
}
%NeverOptimizeFunction(main);
main();
