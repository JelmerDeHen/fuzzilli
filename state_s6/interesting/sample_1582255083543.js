function main() {
let v5 = 0;
const v7 = v5 + 1;
// v7 = .primitive
v5 = v7;
let v10 = 0;
const v14 = {b:2147483647};
// v14 = .object(ofGroup: Object, withProperties: ["b", "__proto__"])
let v18 = 0;
const v19 = [1337,9007199254740993,v14,0];
// v19 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v20 = v18 + 1;
// v20 = .primitive
v18 = v20;
const v21 = "undefined".split("undefined",6);
// v21 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
}
%NeverOptimizeFunction(main);
main();
