function main() {
const v0 = {};
// v0 = .object(ofGroup: Object, withProperties: ["__proto__"])
const v5 = [13.37,13.37];
// v5 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v7 = [1337,1337,1337];
// v7 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v8 = [v7,v5];
// v8 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v9 = {c:v8,valueOf:Uint8ClampedArray,e:2600425381,constructor:1337};
// v9 = .object(ofGroup: Object, withProperties: ["constructor", "e", "valueOf", "__proto__", "c"])
const v12 = [v0];
// v12 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
let v13 = v12;
const v16 = [13.37,13.37,13.37,13.37];
// v16 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v17 = {__proto__:"hasInstance",d:v16};
// v17 = .object(ofGroup: Object, withProperties: ["__proto__", "d"])
const v19 = {call:v17};
// v19 = .object(ofGroup: Object, withProperties: ["__proto__", "call"])
const v21 = new Proxy(Array,v19);
// v21 = .unknown
const v22 = new Uint8ClampedArray(v7);
// v22 = .object(ofGroup: Uint8ClampedArray, withProperties: ["buffer", "constructor", "byteLength", "length", "__proto__", "byteOffset"], withMethods: ["forEach", "map", "lastIndexOf", "every", "slice", "values", "subarray", "join", "fill", "filter", "copyWithin", "sort", "some", "reduceRight", "entries", "set", "findIndex", "reverse", "reduce", "find", "includes", "indexOf", "keys"])
const v23 = {toString:v21,constructor:1337,b:"buffer",...v13,...v22,...v9,...undefined};
// v23 = .object(ofGroup: Object, withProperties: ["__proto__", "constructor", "byteLength", "b", "e", "length", "buffer", "c", "valueOf", "byteOffset", "toString"], withMethods: ["keys", "flat", "shift", "slice", "set", "join", "find", "findIndex", "concat", "indexOf", "forEach", "pop", "some", "copyWithin", "toString", "reduce", "filter", "unshift", "flatMap", "subarray", "reduceRight", "map", "every", "reverse", "splice", "lastIndexOf", "push", "entries", "values", "toLocaleString", "includes", "sort", "fill"])
}
%NeverOptimizeFunction(main);
main();
