function main() {
const v2 = [1337,1337,1337,1337];
// v2 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
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
