function main() {
const v4 = [13.37,13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v5 = {toString:v4,valueOf:2147483648,constructor:"NEGATIVE_INFINITY",length:RegExp,__proto__:RegExp,b:RegExp,d:13.37,a:2147483648,c:13.37};
// v5 = .object(ofGroup: Object, withProperties: ["__proto__", "toString", "valueOf", "constructor", "a", "c", "d"], withMethods: ["b", "length", "__proto__"])
const v6 = {};
// v6 = .object(ofGroup: Object, withProperties: ["__proto__"])
const v11 = [13.37,13.37];
// v11 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v13 = [1337,1337,1337];
// v13 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v14 = [v13,v11];
// v14 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v15 = {c:v14,valueOf:Uint8ClampedArray,e:2600425381,constructor:1337};
// v15 = .object(ofGroup: Object, withProperties: ["valueOf", "constructor", "e", "__proto__", "c"])
const v18 = [v6];
// v18 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
let v19 = v18;
const v22 = [13.37,13.37,13.37,13.37];
// v22 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v23 = {__proto__:"hasInstance",d:v22};
// v23 = .object(ofGroup: Object, withProperties: ["__proto__", "d"])
const v25 = {call:v23};
// v25 = .object(ofGroup: Object, withProperties: ["call", "__proto__"])
const v27 = new Proxy(Array,v25);
// v27 = .unknown
const v28 = new Uint8ClampedArray(v5);
// v28 = .object(ofGroup: Uint8ClampedArray, withProperties: ["byteLength", "__proto__", "byteOffset", "constructor", "length", "buffer"], withMethods: ["entries", "every", "lastIndexOf", "values", "reverse", "map", "copyWithin", "subarray", "reduce", "filter", "sort", "find", "keys", "reduceRight", "join", "forEach", "fill", "set", "indexOf", "some", "includes", "findIndex", "slice"])
const v29 = {toString:v27,constructor:1337,b:"buffer",...v19,...v28,...v15,...undefined};
// v29 = .object(ofGroup: Object, withProperties: ["toString", "buffer", "constructor", "length", "__proto__", "b", "byteOffset", "valueOf", "byteLength", "e", "c"], withMethods: ["toLocaleString", "forEach", "unshift", "concat", "subarray", "fill", "keys", "includes", "values", "reduceRight", "entries", "some", "lastIndexOf", "flat", "every", "indexOf", "set", "filter", "pop", "shift", "splice", "copyWithin", "toString", "findIndex", "join", "map", "reduce", "sort", "push", "flatMap", "slice", "find", "reverse"])
}
%NeverOptimizeFunction(main);
main();
