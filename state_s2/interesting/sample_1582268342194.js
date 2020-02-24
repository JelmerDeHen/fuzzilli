function main() {
const v4 = [1337];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v6 = {get:gc};
// v6 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["get"])
const v8 = Object.defineProperty(v4,64,v6);
// v8 = .undefined
let v11 = 0;
const v12 = v11 + 1;
// v12 = .primitive
v11 = v12;
const v13 = {length:13.37,a:gc,constructor:gc};
// v13 = .object(ofGroup: Object, withProperties: ["__proto__", "length"], withMethods: ["a", "constructor"])
const v14 = {};
// v14 = .object(ofGroup: Object, withProperties: ["__proto__"])
const v15 = ~v13;
// v15 = .boolean
const v16 = v14[v4];
// v16 = .unknown
}
%NeverOptimizeFunction(main);
main();
