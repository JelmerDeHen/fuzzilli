function main() {
const v5 = {};
// v5 = .object(ofGroup: Object, withProperties: ["__proto__"])
const v10 = [13.37,13.37,13.37,13.37,13.37];
// v10 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v15 = [13.37,13.37,13.37,13.37,13.37];
// v15 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v18 = Object < v15;
// v18 = .boolean
v10[v5] = true;
const v25 = {b:2147483647};
// v25 = .object(ofGroup: Object, withProperties: ["__proto__", "b"])
const v26 = {__proto__:Uint8Array,a:v25,constructor:1337,d:"undefined",valueOf:1337,b:13.37};
// v26 = .object(ofGroup: Object, withProperties: ["__proto__", "d", "b", "valueOf", "a", "constructor"])
let v43 = 0;
const v44 = v43 + 1;
// v44 = .primitive
v43 = v44;
}
%NeverOptimizeFunction(main);
main();
