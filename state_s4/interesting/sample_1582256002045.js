function main() {
const v4 = [13.37];
// v4 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v5 = [13.37];
// v5 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v6 = {__proto__:4096,constructor:isFinite,a:v4,e:"match",d:4096};
// v6 = .object(ofGroup: Object, withProperties: ["a", "e", "__proto__", "d"], withMethods: ["constructor"])
const v7 = {toString:4096,length:v5,b:4096,a:isFinite,e:v6,d:v4};
// v7 = .object(ofGroup: Object, withProperties: ["length", "d", "toString", "e", "__proto__", "b"], withMethods: ["a"])
const v10 = [1337,1337];
// v10 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v12 = Symbol.isConcatSpreadable;
// v12 = .object(ofGroup: Symbol, withProperties: ["__proto__", "description"])
v10[v12] = v7;
let v15 = 4096;
const v17 = typeof Array;
// v17 = .string
return v17;
}
%NeverOptimizeFunction(main);
main();
