function main() {
const v4 = [13.37,13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v5 = {toString:v4,valueOf:2147483648,constructor:"NEGATIVE_INFINITY",length:RegExp,__proto__:RegExp,b:RegExp,d:13.37,a:2147483648,c:13.37};
// v5 = .object(ofGroup: Object, withProperties: ["a", "valueOf", "c", "__proto__", "constructor", "d", "toString"], withMethods: ["length", "__proto__", "b"])
const v6 = {};
// v6 = .object(ofGroup: Object, withProperties: ["__proto__"])
const v11 = [13.37,13.37];
// v11 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v13 = [1337,1337,1337];
// v13 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v14 = [v13,v11];
// v14 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v15 = {c:v14,valueOf:Uint8ClampedArray,e:2600425381,constructor:1337};
// v15 = .object(ofGroup: Object, withProperties: ["c", "constructor", "e", "valueOf", "__proto__"])
const v18 = [v6];
// v18 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
let v19 = v18;
const v22 = [13.37,13.37,13.37,13.37];
// v22 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v23 = {__proto__:"hasInstance",d:v22};
// v23 = .object(ofGroup: Object, withProperties: ["d", "__proto__"])
const v25 = {call:v23};
// v25 = .object(ofGroup: Object, withProperties: ["call", "__proto__"])
const v27 = new Proxy(Array,v25);
// v27 = .unknown
const v28 = new Uint8ClampedArray(v5);
// v28 = .object(ofGroup: Uint8ClampedArray, withProperties: ["byteOffset", "__proto__", "buffer", "length", "byteLength", "constructor"], withMethods: ["every", "reduce", "indexOf", "reverse", "map", "join", "entries", "reduceRight", "subarray", "includes", "sort", "some", "values", "copyWithin", "filter", "lastIndexOf", "set", "fill", "find", "findIndex", "keys", "forEach", "slice"])
const v29 = {toString:v27,constructor:1337,b:"buffer",...v19,...v28,...v15,...undefined};
// v29 = .object(ofGroup: Object, withProperties: ["toString", "length", "b", "valueOf", "buffer", "byteLength", "e", "byteOffset", "__proto__", "constructor", "c"], withMethods: ["flatMap", "includes", "some", "reverse", "concat", "push", "reduce", "set", "fill", "toLocaleString", "map", "slice", "forEach", "flat", "every", "toString", "copyWithin", "findIndex", "values", "keys", "pop", "join", "unshift", "lastIndexOf", "reduceRight", "find", "splice", "indexOf", "shift", "filter", "sort", "entries", "subarray"])
}
%NeverOptimizeFunction(main);
main();
