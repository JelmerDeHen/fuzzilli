function main() {
const v3 = [1337];
// v3 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v7 = {get:undefined};
// v7 = .object(ofGroup: Object, withProperties: ["__proto__", "get"])
v3.__proto__ = Object;
const v12 = Object.defineProperty(Object,268435456,v7);
// v12 = .undefined
const v13 = Object.preventExtensions(Object);
// v13 = .object()
}
%NeverOptimizeFunction(main);
main();
