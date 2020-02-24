function main() {
const v0 = {};
// v0 = .object(ofGroup: Object, withProperties: ["__proto__"])
const v5 = [13.37,13.37];
// v5 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v7 = [1337,1337,1337];
// v7 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v8 = [v7,v5];
// v8 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v9 = {c:v8,valueOf:Uint8ClampedArray,e:2600425381,constructor:1337};
// v9 = .object(ofGroup: Object, withProperties: ["constructor", "e", "valueOf", "__proto__", "c"])
const v12 = [v0];
// v12 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
let v13 = v12;
const v16 = [13.37,13.37,13.37,13.37];
// v16 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v17 = {__proto__:"hasInstance",d:v16};
// v17 = .object(ofGroup: Object, withProperties: ["__proto__", "d"])
const v19 = {call:v17};
// v19 = .object(ofGroup: Object, withProperties: ["__proto__", "call"])
const v21 = new Proxy(Array,v19);
// v21 = .unknown
const v22 = new Uint8ClampedArray(v7);
// v22 = .object(ofGroup: Uint8ClampedArray, withProperties: ["length", "constructor", "buffer", "byteOffset", "__proto__", "byteLength"], withMethods: ["fill", "findIndex", "keys", "forEach", "slice", "some", "set", "copyWithin", "values", "join", "find", "entries", "lastIndexOf", "reverse", "includes", "reduceRight", "every", "indexOf", "sort", "filter", "map", "subarray", "reduce"])
const v23 = {toString:v21,constructor:1337,b:"buffer",...v13,...v22,...v9,...undefined};
// v23 = .object(ofGroup: Object, withProperties: ["valueOf", "b", "constructor", "buffer", "byteLength", "c", "byteOffset", "toString", "__proto__", "e", "length"], withMethods: ["fill", "concat", "entries", "flat", "sort", "toString", "shift", "push", "reduceRight", "slice", "unshift", "some", "filter", "set", "values", "splice", "every", "forEach", "map", "toLocaleString", "subarray", "includes", "lastIndexOf", "join", "flatMap", "indexOf", "find", "findIndex", "keys", "reverse", "copyWithin", "reduce", "pop"])
}
%NeverOptimizeFunction(main);
main();
