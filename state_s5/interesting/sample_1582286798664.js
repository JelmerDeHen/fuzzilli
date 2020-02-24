function main() {
const v4 = [13.37,13.37,13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v6 = [1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v7 = [Int16Array];
// v7 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v8 = {c:13.37,e:1411100319,b:1337,__proto__:v6,valueOf:13.37};
// v8 = .object(ofGroup: Object, withProperties: ["valueOf", "c", "e", "__proto__", "b"])
const v9 = {constructor:v7,valueOf:Int16Array,length:v4,c:1411100319,d:v4,b:v7,toString:1337};
// v9 = .object(ofGroup: Object, withProperties: ["d", "b", "toString", "c", "length", "valueOf", "__proto__", "constructor"])
let v10 = 13.37;
const v13 = [1337];
// v13 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v14 = [v13];
// v14 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
let v15 = v14;
let v17 = undefined;
let v21 = -1024;
let v23 = gc;
const v25 = [-4294967295];
// v25 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v26 = v25.pop();
// v26 = .unknown
const v27 = v25.unshift(v26);
// v27 = .integer
const v28 = v21 + 1;
// v28 = .primitive
v21 = v28;
const v29 = 1411100319 <= Int16Array;
// v29 = .boolean
delete v8[-4096];
const v30 = ~1411100319;
// v30 = .boolean
const v31 = gc();
// v31 = .undefined
const v32 = !v30;
// v32 = .boolean
const v33 = gc();
// v33 = .undefined
}
%NeverOptimizeFunction(main);
main();
