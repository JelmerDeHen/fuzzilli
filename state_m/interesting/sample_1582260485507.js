function main() {
const v4 = [13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v6 = [1337,1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v7 = [v6,v4];
// v7 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v8 = {c:v7,valueOf:Int8Array,e:2600425381,constructor:1337};
// v8 = .object(ofGroup: Object, withProperties: ["c", "valueOf", "e", "__proto__", "constructor"])
const v12 = [1337];
// v12 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
let v13 = v12;
const v16 = [1337];
// v16 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
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
// v33 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v34 = {__proto__:"hasInstance",d:v33};
// v34 = .object(ofGroup: Object, withProperties: ["__proto__", "d"])
const v36 = {call:v34};
// v36 = .object(ofGroup: Object, withProperties: ["__proto__", "call"])
const v38 = new Proxy(Array,v36);
// v38 = .unknown
const v39 = new Int8Array(v6);
// v39 = .object(ofGroup: Int8Array, withProperties: ["constructor", "buffer", "__proto__", "length", "byteOffset", "byteLength"], withMethods: ["indexOf", "includes", "fill", "entries", "forEach", "reduceRight", "set", "values", "find", "slice", "map", "some", "copyWithin", "findIndex", "reverse", "keys", "filter", "subarray", "reduce", "join", "sort", "lastIndexOf", "every"])
const v40 = {toString:v38,constructor:1337,b:"buffer",...v13,...v39,...v8,...undefined};
// v40 = .object(ofGroup: Object, withProperties: ["__proto__", "e", "constructor", "length", "buffer", "byteOffset", "toString", "c", "byteLength", "b", "valueOf"], withMethods: ["includes", "shift", "copyWithin", "filter", "every", "sort", "indexOf", "unshift", "reduceRight", "keys", "map", "toString", "find", "join", "splice", "subarray", "reduce", "flatMap", "some", "pop", "entries", "fill", "toLocaleString", "reverse", "set", "flat", "values", "findIndex", "push", "slice", "concat", "forEach", "lastIndexOf"])
}
%NeverOptimizeFunction(main);
main();
