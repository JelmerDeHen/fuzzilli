function main() {
const v2 = [1337,1337,1337,1337];
// v2 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
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
