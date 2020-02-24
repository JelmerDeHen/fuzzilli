function main() {
const v3 = [13.37,13.37,13.37,13.37,13.37];
// v3 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v4 = [v3,13.37,v3];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v5 = {length:13.37,b:"NEGATIVE_INFINITY",valueOf:v3,__proto__:v4};
// v5 = .object(ofGroup: Object, withProperties: ["valueOf", "length", "b", "__proto__"])
const v7 = Symbol.toPrimitive;
// v7 = .object(ofGroup: Symbol, withProperties: ["__proto__", "description"])
const v8 = v5[v7];
// v8 = .unknown
const v10 = {set:v8};
// v10 = .object(ofGroup: Object, withProperties: ["__proto__", "set"])
const v12 = Object.defineProperty(v3,v7,v10);
// v12 = .undefined
}
%NeverOptimizeFunction(main);
main();
