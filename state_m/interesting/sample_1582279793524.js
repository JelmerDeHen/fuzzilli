function main() {
const v0 = [];
// v0 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v1 = {a:v0};
// v1 = .object(ofGroup: Object, withProperties: ["__proto__", "a"])
const v4 = {set:isFinite,get:isFinite};
// v4 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["set", "get"])
const v6 = Object.defineProperty(v1,-0.0,v4);
// v6 = .undefined
}
%NeverOptimizeFunction(main);
main();
