function main() {
const v4 = [13.37,13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v5 = {toString:v4,valueOf:2147483648,constructor:"NEGATIVE_INFINITY",length:RegExp,__proto__:RegExp,b:RegExp,d:13.37,a:2147483648,c:13.37};
// v5 = .object(ofGroup: Object, withProperties: ["constructor", "valueOf", "a", "c", "toString", "__proto__", "d"], withMethods: ["__proto__", "length", "b"])
const v6 = {};
// v6 = .object(ofGroup: Object, withProperties: ["__proto__"])
const v11 = [13.37,13.37];
// v11 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v13 = [1337,1337,1337];
// v13 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v14 = [v13,v11];
// v14 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v15 = {c:v14,valueOf:Uint8ClampedArray,e:2600425381,constructor:1337};
// v15 = .object(ofGroup: Object, withProperties: ["c", "constructor", "e", "__proto__", "valueOf"])
const v18 = [v6];
// v18 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
let v19 = v18;
const v22 = [13.37,13.37,13.37,13.37];
// v22 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v23 = {__proto__:"hasInstance",d:v22};
// v23 = .object(ofGroup: Object, withProperties: ["d", "__proto__"])
const v25 = {call:v23};
// v25 = .object(ofGroup: Object, withProperties: ["call", "__proto__"])
const v27 = new Proxy(Array,v25);
// v27 = .unknown
const v28 = new Uint8ClampedArray(v5);
// v28 = .object(ofGroup: Uint8ClampedArray, withProperties: ["buffer", "length", "byteLength", "constructor", "__proto__", "byteOffset"], withMethods: ["join", "values", "reduceRight", "find", "reverse", "fill", "indexOf", "entries", "forEach", "subarray", "findIndex", "every", "set", "reduce", "slice", "filter", "copyWithin", "keys", "lastIndexOf", "sort", "map", "some", "includes"])
const v29 = {toString:v27,constructor:1337,b:"buffer",...v19,...v28,...v15,...undefined};
// v29 = .object(ofGroup: Object, withProperties: ["valueOf", "c", "e", "toString", "constructor", "byteLength", "buffer", "length", "__proto__", "byteOffset", "b"], withMethods: ["sort", "indexOf", "flatMap", "every", "includes", "some", "pop", "map", "findIndex", "splice", "reduceRight", "push", "toLocaleString", "flat", "subarray", "forEach", "filter", "unshift", "shift", "toString", "values", "find", "reduce", "fill", "join", "copyWithin", "entries", "slice", "set", "lastIndexOf", "reverse", "keys", "concat"])
}
%NeverOptimizeFunction(main);
main();
