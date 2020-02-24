function main() {
const v4 = [13.37];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v6 = Array(127);
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v7 = [1337,1337,1337];
// v7 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v8 = [];
// v8 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
Array.valueOf = Array;
const v9 = [v7,13.37,v7];
// v9 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
with (v6) {
    const v12 = {set:Array};
    // v12 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["set"])
    const v14 = Object.defineProperty(v9,"constructor",v12);
    // v14 = .undefined
}
const v15 = {valueOf:v8,length:13.37,d:127,e:127};
// v15 = .object(ofGroup: Object, withProperties: ["__proto__", "d", "valueOf", "e", "length"])
const v16 = {c:v8,valueOf:v15,d:Array,a:1337};
// v16 = .object(ofGroup: Object, withProperties: ["a", "c", "__proto__", "valueOf"], withMethods: ["d"])
let v17 = v15;
const v22 = [13.37,13.37];
// v22 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v24 = [1337,1337,1337,1337];
// v24 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v25 = [13.37,v22];
// v25 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v26 = {c:13.37};
// v26 = .object(ofGroup: Object, withProperties: ["c", "__proto__"])
const v27 = {d:gc,valueOf:v24};
// v27 = .object(ofGroup: Object, withProperties: ["__proto__", "valueOf"], withMethods: ["d"])
let v28 = 1337;
const v29 = v22[1024];
// v29 = .unknown
let v32 = 0;
do {
    const v33 = v29 - 1;
    // v33 = .primitive
    const v34 = v32 + 1;
    // v34 = .primitive
    v32 = v34;
} while (v32 < 3);
v32 = 3;
const v35 = {__proto__:3,constructor:v32,d:v26,valueOf:v29,length:13.37};
// v35 = .object(ofGroup: Object, withProperties: ["constructor", "__proto__", "valueOf", "length", "d"])
const v37 = Object();
// v37 = .object()
}
%NeverOptimizeFunction(main);
main();
