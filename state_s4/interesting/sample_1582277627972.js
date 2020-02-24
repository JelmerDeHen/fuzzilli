function main() {
const v3 = [1337];
// v3 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
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
