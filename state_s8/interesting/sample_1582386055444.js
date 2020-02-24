function main() {
const v2 = [13.37,13.37,13.37,13.37,13.37];
// v2 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v4 = [1337,1337,1337];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v5 = {b:v4};
// v5 = .object(ofGroup: Object, withProperties: ["__proto__", "b"])
const v6 = {d:v5,length:3253023065,valueOf:1337,a:13.37,e:3253023065,__proto__:v2};
// v6 = .object(ofGroup: Object, withProperties: ["__proto__", "a", "d", "e", "length", "valueOf"])
const v8 = {__proto__:536870912};
// v8 = .object(ofGroup: Object, withProperties: ["__proto__"])
const v12 = v6.includes();
// v12 = .unknown
let v15 = 0;
}
%NeverOptimizeFunction(main);
main();
