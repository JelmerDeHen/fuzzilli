function main() {
const v2 = [13.37];
// v2 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v4 = {constructor:-4294967295,length:1337,__proto__:v2};
// v4 = .object(ofGroup: Object, withProperties: ["constructor", "length", "__proto__"])
const v9 = [13.37];
// v9 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v11 = [1337,1337,1337];
// v11 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v12 = {toString:v9,b:"PI",valueOf:v11};
// v12 = .object(ofGroup: Object, withProperties: ["b", "toString", "__proto__", "valueOf"])
const v13 = {b:v12};
// v13 = .object(ofGroup: Object, withProperties: ["b", "__proto__"])
const v14 = v13.__proto__;
// v14 = .object()
let v15 = v12;
v14[984635998] = v15;
const v19 = [];
// v19 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v21 = v2.includes(v4,1);
// v21 = .boolean
const v23 = {set:gc};
// v23 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["set"])
const v25 = Object.defineProperty(v19,1024,v23);
// v25 = .undefined
}
%NeverOptimizeFunction(main);
main();
