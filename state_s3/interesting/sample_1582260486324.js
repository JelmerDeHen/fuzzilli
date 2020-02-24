function main() {
const v4 = [13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v6 = [1337,1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v7 = [v6,v4];
// v7 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v8 = {c:v7,valueOf:Int8Array,e:2600425381,constructor:1337};
// v8 = .object(ofGroup: Object, withProperties: ["constructor", "c", "__proto__", "e", "valueOf"])
const v12 = [1337];
// v12 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
let v13 = v12;
const v16 = [1337];
// v16 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
let v17 = v16;
let v19 = undefined;
let v23 = 0;
let v26 = 0;
const v27 = v26 + 1;
// v27 = .primitive
v26 = v27;
let v31 = 0;
const v32 = v23 + 1;
// v32 = .primitive
v23 = v32;
const v33 = [13.37,13.37,13.37,13.37];
// v33 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v34 = {__proto__:"hasInstance",d:v33};
// v34 = .object(ofGroup: Object, withProperties: ["__proto__", "d"])
const v36 = {call:v34};
// v36 = .object(ofGroup: Object, withProperties: ["call", "__proto__"])
const v38 = new Proxy(Array,v36);
// v38 = .unknown
const v39 = new Int8Array(v6);
// v39 = .object(ofGroup: Int8Array, withProperties: ["byteOffset", "byteLength", "buffer", "constructor", "__proto__", "length"], withMethods: ["every", "keys", "fill", "sort", "indexOf", "map", "set", "entries", "reduce", "reduceRight", "find", "values", "some", "filter", "join", "lastIndexOf", "reverse", "forEach", "subarray", "findIndex", "includes", "copyWithin", "slice"])
const v40 = {toString:v38,constructor:1337,b:"buffer",...v13,...v39,...v8,...undefined};
// v40 = .object(ofGroup: Object, withProperties: ["b", "constructor", "byteOffset", "__proto__", "buffer", "toString", "c", "byteLength", "valueOf", "length", "e"], withMethods: ["splice", "filter", "every", "set", "join", "sort", "keys", "pop", "some", "reduceRight", "concat", "copyWithin", "forEach", "map", "indexOf", "fill", "entries", "values", "toLocaleString", "subarray", "lastIndexOf", "toString", "find", "flat", "unshift", "shift", "reverse", "flatMap", "reduce", "includes", "findIndex", "slice", "push"])
}
%NeverOptimizeFunction(main);
main();
