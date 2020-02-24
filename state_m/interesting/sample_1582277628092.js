function main() {
const v3 = [1337];
// v3 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v7 = {get:undefined};
// v7 = .object(ofGroup: Object, withProperties: ["get", "__proto__"])
v3.__proto__ = Object;
const v12 = Object.defineProperty(Object,268435456,v7);
// v12 = .undefined
const v13 = Object.preventExtensions(Object);
// v13 = .object()
}
%NeverOptimizeFunction(main);
main();
