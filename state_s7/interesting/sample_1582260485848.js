function main() {
const v4 = [13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v6 = [1337,1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v7 = [v6,v4];
// v7 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v8 = {c:v7,valueOf:Int8Array,e:2600425381,constructor:1337};
// v8 = .object(ofGroup: Object, withProperties: ["e", "valueOf", "constructor", "__proto__", "c"])
const v12 = [1337];
// v12 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
let v13 = v12;
const v16 = [1337];
// v16 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
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
// v33 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v34 = {__proto__:"hasInstance",d:v33};
// v34 = .object(ofGroup: Object, withProperties: ["__proto__", "d"])
const v36 = {call:v34};
// v36 = .object(ofGroup: Object, withProperties: ["call", "__proto__"])
const v38 = new Proxy(Array,v36);
// v38 = .unknown
const v39 = new Int8Array(v6);
// v39 = .object(ofGroup: Int8Array, withProperties: ["byteOffset", "constructor", "buffer", "byteLength", "__proto__", "length"], withMethods: ["values", "copyWithin", "fill", "join", "keys", "sort", "entries", "forEach", "subarray", "some", "map", "reduceRight", "reduce", "lastIndexOf", "filter", "findIndex", "reverse", "every", "set", "includes", "find", "slice", "indexOf"])
const v40 = {toString:v38,constructor:1337,b:"buffer",...v13,...v39,...v8,...undefined};
// v40 = .object(ofGroup: Object, withProperties: ["c", "toString", "length", "valueOf", "b", "byteOffset", "e", "byteLength", "__proto__", "constructor", "buffer"], withMethods: ["copyWithin", "map", "toLocaleString", "toString", "some", "reverse", "keys", "push", "sort", "every", "values", "lastIndexOf", "find", "shift", "filter", "join", "unshift", "set", "reduce", "indexOf", "splice", "forEach", "fill", "reduceRight", "entries", "subarray", "includes", "concat", "slice", "pop", "flat", "flatMap", "findIndex"])
}
%NeverOptimizeFunction(main);
main();
