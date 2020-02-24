function main() {
const v4 = [13.37,13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v6 = [1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v7 = [v4];
// v7 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v8 = {valueOf:Int32Array,c:v6,__proto__:v7,b:v4};
// v8 = .object(ofGroup: Object, withProperties: ["b", "c", "valueOf", "__proto__"])
const v10 = new Map(v8);
// v10 = .object(ofGroup: Map, withProperties: ["__proto__", "size"], withMethods: ["set", "get", "keys", "entries", "forEach", "clear", "values", "delete", "has"])
const v11 = v10.keys();
// v11 = .object()
v11.valueOf = gc;
delete v11.valueOf;
let v15 = 0;
let v18 = 0;
const v19 = v15 + 1;
// v19 = .primitive
v15 = v19;
let v22 = 0;
const v23 = v22 + 1;
// v23 = .primitive
v22 = v23;
let v26 = 0;
const v27 = v26 + 1;
// v27 = .primitive
v26 = v27;
const v32 = {__proto__:536870912};
// v32 = .object(ofGroup: Object, withProperties: ["__proto__"])
let v36 = 0;
let v41 = 0;
let v44 = 0;
let v47 = 0;
const v48 = v47 + 1;
// v48 = .primitive
v47 = v48;
}
%NeverOptimizeFunction(main);
main();
