function main() {
const v5 = {};
// v5 = .object(ofGroup: Object, withProperties: ["__proto__"])
const v10 = [13.37,13.37,13.37,13.37,13.37];
// v10 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v15 = [13.37,13.37,13.37,13.37,13.37];
// v15 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v18 = Object < v15;
// v18 = .boolean
v10[v5] = true;
const v25 = {b:2147483647};
// v25 = .object(ofGroup: Object, withProperties: ["__proto__", "b"])
const v26 = {__proto__:Uint8Array,a:v25,constructor:1337,d:"undefined",valueOf:1337,b:13.37};
// v26 = .object(ofGroup: Object, withProperties: ["__proto__", "constructor", "b", "valueOf", "a", "d"])
let v43 = 0;
const v44 = v43 + 1;
// v44 = .primitive
v43 = v44;
}
%NeverOptimizeFunction(main);
main();
