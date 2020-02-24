function main() {
const v3 = [1337];
// v3 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
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
