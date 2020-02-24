function main() {
const v0 = [];
// v0 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v1 = {a:v0};
// v1 = .object(ofGroup: Object, withProperties: ["__proto__", "a"])
const v4 = {set:isFinite,get:isFinite};
// v4 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["get", "set"])
const v6 = Object.defineProperty(v1,-0.0,v4);
// v6 = .undefined
}
%NeverOptimizeFunction(main);
main();
