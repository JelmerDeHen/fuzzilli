function main() {
const v1 = {c:13.37};
// v1 = .object(ofGroup: Object, withProperties: ["c", "__proto__"])
let v4 = 0;
const v5 = v4 + 1;
// v5 = .primitive
v4 = v5;
const v9 = [1337,1337,1337,1337];
// v9 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v10 = v9 + 1;
// v10 = .primitive
const v11 = gc();
// v11 = .undefined
const v14 = gc();
// v14 = .undefined
}
%NeverOptimizeFunction(main);
main();
