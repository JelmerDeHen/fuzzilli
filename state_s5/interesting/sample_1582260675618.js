function main() {
const v0 = {};
// v0 = .object(ofGroup: Object, withProperties: ["__proto__"])
const v5 = [13.37,13.37];
// v5 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v7 = [1337,1337,1337];
// v7 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v8 = [v7,v5];
// v8 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v9 = {c:v8,valueOf:Uint8ClampedArray,e:2600425381,constructor:1337};
// v9 = .object(ofGroup: Object, withProperties: ["__proto__", "constructor", "e", "c", "valueOf"])
const v12 = [v0];
// v12 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
let v13 = v12;
const v16 = [13.37,13.37,13.37,13.37];
// v16 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v17 = {__proto__:"hasInstance",d:v16};
// v17 = .object(ofGroup: Object, withProperties: ["__proto__", "d"])
const v19 = {call:v17};
// v19 = .object(ofGroup: Object, withProperties: ["__proto__", "call"])
const v21 = new Proxy(Array,v19);
// v21 = .unknown
const v22 = new Uint8ClampedArray(v7);
// v22 = .object(ofGroup: Uint8ClampedArray, withProperties: ["buffer", "length", "byteLength", "constructor", "__proto__", "byteOffset"], withMethods: ["join", "values", "reduceRight", "find", "reverse", "fill", "indexOf", "entries", "forEach", "subarray", "findIndex", "every", "set", "reduce", "slice", "filter", "copyWithin", "keys", "lastIndexOf", "sort", "map", "some", "includes"])
const v23 = {toString:v21,constructor:1337,b:"buffer",...v13,...v22,...v9,...undefined};
// v23 = .object(ofGroup: Object, withProperties: ["valueOf", "b", "c", "buffer", "length", "byteLength", "byteOffset", "toString", "__proto__", "e", "constructor"], withMethods: ["includes", "reverse", "findIndex", "flat", "values", "flatMap", "copyWithin", "find", "reduceRight", "indexOf", "entries", "keys", "pop", "reduce", "splice", "sort", "some", "set", "concat", "shift", "push", "forEach", "every", "fill", "map", "join", "slice", "unshift", "subarray", "toString", "toLocaleString", "lastIndexOf", "filter"])
}
%NeverOptimizeFunction(main);
main();
