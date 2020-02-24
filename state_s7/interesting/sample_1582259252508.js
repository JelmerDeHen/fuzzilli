function main() {
const v5 = {};
// v5 = .object(ofGroup: Object, withProperties: ["__proto__"])
const v10 = [13.37,13.37,13.37,13.37,13.37];
// v10 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v15 = [13.37,13.37,13.37,13.37,13.37];
// v15 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v18 = Object < v15;
// v18 = .boolean
v10[v5] = true;
const v25 = {b:2147483647};
// v25 = .object(ofGroup: Object, withProperties: ["__proto__", "b"])
const v26 = {__proto__:Uint8Array,a:v25,constructor:1337,d:"undefined",valueOf:1337,b:13.37};
// v26 = .object(ofGroup: Object, withProperties: ["constructor", "valueOf", "d", "b", "__proto__", "a"])
let v43 = 0;
const v44 = v43 + 1;
// v44 = .primitive
v43 = v44;
}
%NeverOptimizeFunction(main);
main();
