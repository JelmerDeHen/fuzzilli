function main() {
const v3 = [3156875969,3156875969,1337,DataView];
// v3 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v4 = {e:DataView,constructor:1337,valueOf:1337,d:v3};
// v4 = .object(ofGroup: Object, withProperties: ["valueOf", "e", "d", "constructor", "__proto__"])
const v7 = Symbol.toPrimitive;
// v7 = .object(ofGroup: Symbol, withProperties: ["__proto__", "description"])
Object[v7] = v4;
}
%NeverOptimizeFunction(main);
main();
