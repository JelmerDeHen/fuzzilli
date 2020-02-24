function main() {
const v4 = [13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v6 = [1337,1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v7 = [v6,v4];
// v7 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v8 = {c:v7,valueOf:Int8Array,e:2600425381,constructor:1337};
// v8 = .object(ofGroup: Object, withProperties: ["__proto__", "constructor", "valueOf", "c", "e"])
const v12 = [1337];
// v12 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
let v13 = v12;
const v16 = [1337];
// v16 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
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
// v33 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v34 = {__proto__:"hasInstance",d:v33};
// v34 = .object(ofGroup: Object, withProperties: ["__proto__", "d"])
const v36 = {call:v34};
// v36 = .object(ofGroup: Object, withProperties: ["__proto__", "call"])
const v38 = new Proxy(Array,v36);
// v38 = .unknown
const v39 = new Int8Array(v6);
// v39 = .object(ofGroup: Int8Array, withProperties: ["buffer", "__proto__", "byteOffset", "length", "constructor", "byteLength"], withMethods: ["fill", "set", "sort", "subarray", "slice", "reduce", "includes", "every", "some", "copyWithin", "reduceRight", "reverse", "indexOf", "lastIndexOf", "values", "entries", "keys", "join", "map", "find", "findIndex", "forEach", "filter"])
const v40 = {toString:v38,constructor:1337,b:"buffer",...v13,...v39,...v8,...undefined};
// v40 = .object(ofGroup: Object, withProperties: ["toString", "__proto__", "byteLength", "constructor", "valueOf", "b", "byteOffset", "length", "buffer", "c", "e"], withMethods: ["toString", "sort", "toLocaleString", "subarray", "findIndex", "push", "flat", "pop", "join", "some", "lastIndexOf", "entries", "splice", "includes", "find", "slice", "concat", "flatMap", "filter", "reduce", "every", "set", "forEach", "keys", "indexOf", "reduceRight", "copyWithin", "reverse", "map", "fill", "unshift", "values", "shift"])
}
%NeverOptimizeFunction(main);
main();
