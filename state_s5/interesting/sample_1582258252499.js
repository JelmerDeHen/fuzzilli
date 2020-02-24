function main() {
const v2 = [13.37];
// v2 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v4 = {constructor:-4294967295,length:1337,__proto__:v2};
// v4 = .object(ofGroup: Object, withProperties: ["__proto__", "constructor", "length"])
const v9 = [13.37];
// v9 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v11 = [1337,1337,1337];
// v11 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v12 = {toString:v9,b:"PI",valueOf:v11};
// v12 = .object(ofGroup: Object, withProperties: ["__proto__", "valueOf", "toString", "b"])
const v13 = {b:v12};
// v13 = .object(ofGroup: Object, withProperties: ["__proto__", "b"])
const v14 = v13.__proto__;
// v14 = .object()
let v15 = v12;
v14[984635998] = v15;
const v19 = [];
// v19 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v21 = v2.includes(v4,1);
// v21 = .boolean
const v23 = {set:gc};
// v23 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["set"])
const v25 = Object.defineProperty(v19,1024,v23);
// v25 = .undefined
}
%NeverOptimizeFunction(main);
main();
