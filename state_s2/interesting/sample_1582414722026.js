function main() {
const v2 = [1337,1337,1337,1337];
// v2 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
let v5 = 0;
const v7 = {get:isNaN};
// v7 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["get"])
const v9 = Object.defineProperty(v2,4,v7);
// v9 = .undefined
const v10 = v5 + 1;
// v10 = .primitive
v5 = v10;
const v11 = isNaN();
// v11 = .boolean
const v12 = v2.indexOf(v11);
// v12 = .integer
}
%NeverOptimizeFunction(main);
main();
