function main() {
const v0 = [];
// v0 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v1 = {a:v0};
// v1 = .object(ofGroup: Object, withProperties: ["a", "__proto__"])
const v4 = {set:isFinite,get:isFinite};
// v4 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["get", "set"])
const v6 = Object.defineProperty(v1,-0.0,v4);
// v6 = .undefined
}
%NeverOptimizeFunction(main);
main();
