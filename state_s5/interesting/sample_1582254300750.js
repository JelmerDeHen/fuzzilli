function main() {
const v4 = [1337,1337];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v5 = {b:13.37,d:1607264097,e:1607264097,constructor:v4,valueOf:WeakSet};
// v5 = .object(ofGroup: Object, withProperties: ["__proto__", "constructor", "valueOf", "d", "b", "e"])
const v11 = [1337,1337];
// v11 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v12 = {b:13.37,d:1607264097,e:1607264097,constructor:v11,valueOf:WeakSet};
// v12 = .object(ofGroup: Object, withProperties: ["d", "e", "__proto__", "valueOf", "b", "constructor"])
let v16 = 0;
const v17 = v16 + 1;
// v17 = .primitive
v16 = v17;
let v20 = 0;
const v21 = v20 + 1;
// v21 = .primitive
v20 = v21;
let v24 = 0;
const v25 = v24 + 1;
// v25 = .primitive
v24 = v25;
let v28 = 0;
const v29 = v28 + 1;
// v29 = .primitive
v28 = v29;
const v30 = v5 in Array;
// v30 = .boolean
}
%NeverOptimizeFunction(main);
main();
