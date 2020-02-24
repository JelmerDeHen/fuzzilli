function main() {
const v0 = {};
// v0 = .object(ofGroup: Object, withProperties: ["__proto__"])
const v5 = [13.37,13.37];
// v5 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v7 = [1337,1337,1337];
// v7 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v8 = [v7,v5];
// v8 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v9 = {c:v8,valueOf:Uint8ClampedArray,e:2600425381,constructor:1337};
// v9 = .object(ofGroup: Object, withProperties: ["c", "valueOf", "e", "__proto__", "constructor"])
const v12 = [v0];
// v12 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
let v13 = v12;
const v16 = [13.37,13.37,13.37,13.37];
// v16 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v17 = {__proto__:"hasInstance",d:v16};
// v17 = .object(ofGroup: Object, withProperties: ["d", "__proto__"])
const v19 = {call:v17};
// v19 = .object(ofGroup: Object, withProperties: ["call", "__proto__"])
const v21 = new Proxy(Array,v19);
// v21 = .unknown
const v22 = new Uint8ClampedArray(v7);
// v22 = .object(ofGroup: Uint8ClampedArray, withProperties: ["__proto__", "byteLength", "constructor", "byteOffset", "length", "buffer"], withMethods: ["filter", "forEach", "lastIndexOf", "find", "subarray", "reduce", "indexOf", "join", "entries", "copyWithin", "sort", "slice", "some", "fill", "reverse", "includes", "reduceRight", "values", "keys", "map", "every", "findIndex", "set"])
const v23 = {toString:v21,constructor:1337,b:"buffer",...v13,...v22,...v9,...undefined};
// v23 = .object(ofGroup: Object, withProperties: ["buffer", "e", "length", "constructor", "__proto__", "b", "c", "toString", "byteOffset", "byteLength", "valueOf"], withMethods: ["map", "toLocaleString", "pop", "copyWithin", "join", "filter", "find", "some", "toString", "indexOf", "forEach", "flat", "unshift", "reverse", "concat", "includes", "sort", "shift", "findIndex", "reduceRight", "set", "flatMap", "lastIndexOf", "keys", "fill", "push", "every", "subarray", "reduce", "entries", "slice", "splice", "values"])
}
%NeverOptimizeFunction(main);
main();
