function main() {
const v5 = {b:2147483647};
// v5 = .object(ofGroup: Object, withProperties: ["__proto__", "b"])
const v6 = {__proto__:isFinite,a:v5,constructor:1337,d:"undefined",valueOf:1337,b:13.37};
// v6 = .object(ofGroup: Object, withProperties: ["a", "__proto__", "b", "constructor", "d", "valueOf"], withMethods: ["__proto__"])
const v9 = [1337];
// v9 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
let v10 = v9;
let v12 = undefined;
let v16 = 0;
const v20 = [1337,1337,1337];
// v20 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
let v23 = 0;
const v25 = v23 + 1;
// v25 = .primitive
v23 = v25;
let v26 = 0;
const v27 = v26 + 1;
// v27 = .primitive
v26 = v27;
const v28 = v16 + 1;
// v28 = .primitive
v16 = v28;
v12 = gc;
let v31 = 0;
v6.length = -266896362;
const v34 = [13.37,13.37,13.37,13.37,13.37];
// v34 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
let v35 = v34;
let v38 = 0;
const v39 = v38 + 1;
// v39 = .primitive
v38 = v39;
}
%NeverOptimizeFunction(main);
main();
