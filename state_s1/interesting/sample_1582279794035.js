function main() {
const v0 = [];
// v0 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v1 = {a:v0};
// v1 = .object(ofGroup: Object, withProperties: ["__proto__", "a"])
const v4 = {set:isFinite,get:isFinite};
// v4 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["set", "get"])
const v6 = Object.defineProperty(v1,-0.0,v4);
// v6 = .undefined
}
%NeverOptimizeFunction(main);
main();
