function main() {
const v0 = [];
// v0 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v1 = {a:v0};
// v1 = .object(ofGroup: Object, withProperties: ["a", "__proto__"])
const v4 = {set:isFinite,get:isFinite};
// v4 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["get", "set"])
const v6 = Object.defineProperty(v1,-0.0,v4);
// v6 = .undefined
}
%NeverOptimizeFunction(main);
main();
