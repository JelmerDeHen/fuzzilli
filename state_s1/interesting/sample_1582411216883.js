function main() {
const v2 = [1337,1337,1337,1337];
// v2 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
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
