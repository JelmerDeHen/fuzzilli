function main() {
const v4 = [13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v6 = [1337,1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v7 = [v6,v4];
// v7 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v8 = {c:v7,valueOf:Int8Array,e:2600425381,constructor:1337};
// v8 = .object(ofGroup: Object, withProperties: ["__proto__", "constructor", "e", "c", "valueOf"])
const v12 = [1337];
// v12 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
let v13 = v12;
const v16 = [1337];
// v16 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
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
// v33 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v34 = {__proto__:"hasInstance",d:v33};
// v34 = .object(ofGroup: Object, withProperties: ["d", "__proto__"])
const v36 = {call:v34};
// v36 = .object(ofGroup: Object, withProperties: ["__proto__", "call"])
const v38 = new Proxy(Array,v36);
// v38 = .unknown
const v39 = new Int8Array(v6);
// v39 = .object(ofGroup: Int8Array, withProperties: ["__proto__", "buffer", "byteOffset", "constructor", "length", "byteLength"], withMethods: ["some", "fill", "copyWithin", "values", "reduceRight", "lastIndexOf", "findIndex", "slice", "join", "indexOf", "reverse", "sort", "forEach", "map", "find", "subarray", "reduce", "every", "keys", "includes", "entries", "filter", "set"])
const v40 = {toString:v38,constructor:1337,b:"buffer",...v13,...v39,...v8,...undefined};
// v40 = .object(ofGroup: Object, withProperties: ["__proto__", "byteLength", "constructor", "b", "e", "length", "buffer", "c", "valueOf", "byteOffset", "toString"], withMethods: ["subarray", "values", "map", "flat", "filter", "flatMap", "push", "find", "lastIndexOf", "splice", "includes", "reduceRight", "reverse", "slice", "copyWithin", "entries", "every", "keys", "pop", "concat", "toString", "fill", "toLocaleString", "set", "reduce", "indexOf", "shift", "forEach", "join", "some", "unshift", "sort", "findIndex"])
}
%NeverOptimizeFunction(main);
main();
