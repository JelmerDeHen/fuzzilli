function main() {
const v0 = {};
// v0 = .object(ofGroup: Object, withProperties: ["__proto__"])
const v5 = [13.37,13.37];
// v5 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v7 = [1337,1337,1337];
// v7 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v8 = [v7,v5];
// v8 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v9 = {c:v8,valueOf:Uint8ClampedArray,e:2600425381,constructor:1337};
// v9 = .object(ofGroup: Object, withProperties: ["constructor", "e", "c", "__proto__", "valueOf"])
const v12 = [v0];
// v12 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
let v13 = v12;
const v16 = [13.37,13.37,13.37,13.37];
// v16 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v17 = {__proto__:"hasInstance",d:v16};
// v17 = .object(ofGroup: Object, withProperties: ["__proto__", "d"])
const v19 = {call:v17};
// v19 = .object(ofGroup: Object, withProperties: ["call", "__proto__"])
const v21 = new Proxy(Array,v19);
// v21 = .unknown
const v22 = new Uint8ClampedArray(v7);
// v22 = .object(ofGroup: Uint8ClampedArray, withProperties: ["byteOffset", "__proto__", "buffer", "length", "byteLength", "constructor"], withMethods: ["every", "reduce", "indexOf", "reverse", "map", "join", "entries", "reduceRight", "subarray", "includes", "sort", "some", "values", "copyWithin", "filter", "lastIndexOf", "set", "fill", "find", "findIndex", "keys", "forEach", "slice"])
const v23 = {toString:v21,constructor:1337,b:"buffer",...v13,...v22,...v9,...undefined};
// v23 = .object(ofGroup: Object, withProperties: ["c", "e", "byteLength", "buffer", "constructor", "length", "toString", "b", "valueOf", "byteOffset", "__proto__"], withMethods: ["pop", "push", "subarray", "keys", "includes", "fill", "reverse", "sort", "every", "flatMap", "indexOf", "flat", "map", "unshift", "findIndex", "find", "entries", "toLocaleString", "splice", "lastIndexOf", "values", "reduce", "slice", "reduceRight", "toString", "filter", "some", "join", "copyWithin", "forEach", "concat", "set", "shift"])
}
%NeverOptimizeFunction(main);
main();
