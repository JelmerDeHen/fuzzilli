function main() {
const v4 = [13.37,13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v5 = {toString:v4,valueOf:2147483648,constructor:"NEGATIVE_INFINITY",length:RegExp,__proto__:RegExp,b:RegExp,d:13.37,a:2147483648,c:13.37};
// v5 = .object(ofGroup: Object, withProperties: ["c", "d", "__proto__", "a", "constructor", "toString", "valueOf"], withMethods: ["b", "__proto__", "length"])
const v6 = {};
// v6 = .object(ofGroup: Object, withProperties: ["__proto__"])
const v11 = [13.37,13.37];
// v11 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v13 = [1337,1337,1337];
// v13 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v14 = [v13,v11];
// v14 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v15 = {c:v14,valueOf:Uint8ClampedArray,e:2600425381,constructor:1337};
// v15 = .object(ofGroup: Object, withProperties: ["valueOf", "c", "e", "__proto__", "constructor"])
const v18 = [v6];
// v18 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
let v19 = v18;
const v22 = [13.37,13.37,13.37,13.37];
// v22 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v23 = {__proto__:"hasInstance",d:v22};
// v23 = .object(ofGroup: Object, withProperties: ["d", "__proto__"])
const v25 = {call:v23};
// v25 = .object(ofGroup: Object, withProperties: ["__proto__", "call"])
const v27 = new Proxy(Array,v25);
// v27 = .unknown
const v28 = new Uint8ClampedArray(v5);
// v28 = .object(ofGroup: Uint8ClampedArray, withProperties: ["length", "constructor", "buffer", "byteOffset", "__proto__", "byteLength"], withMethods: ["fill", "findIndex", "keys", "forEach", "slice", "some", "set", "copyWithin", "values", "join", "find", "entries", "lastIndexOf", "reverse", "includes", "reduceRight", "every", "indexOf", "sort", "filter", "map", "subarray", "reduce"])
const v29 = {toString:v27,constructor:1337,b:"buffer",...v19,...v28,...v15,...undefined};
// v29 = .object(ofGroup: Object, withProperties: ["b", "__proto__", "length", "byteLength", "constructor", "toString", "valueOf", "e", "buffer", "byteOffset", "c"], withMethods: ["some", "find", "unshift", "keys", "pop", "filter", "toString", "indexOf", "flatMap", "subarray", "slice", "splice", "reverse", "toLocaleString", "concat", "shift", "fill", "findIndex", "reduce", "map", "includes", "sort", "reduceRight", "values", "forEach", "set", "copyWithin", "entries", "every", "push", "lastIndexOf", "flat", "join"])
}
%NeverOptimizeFunction(main);
main();
