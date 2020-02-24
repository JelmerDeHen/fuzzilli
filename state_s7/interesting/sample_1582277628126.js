function main() {
const v3 = [1337];
// v3 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
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
