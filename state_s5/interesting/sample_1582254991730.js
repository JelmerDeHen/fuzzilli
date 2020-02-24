function main() {
const v4 = [1337,1337];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v5 = {b:13.37,d:1607264097,e:1607264097,constructor:v4,valueOf:WeakSet};
// v5 = .object(ofGroup: Object, withProperties: ["e", "constructor", "__proto__", "d", "valueOf", "b"])
const v7 = [1337,1337];
// v7 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v11 = [13.37,13.37];
// v11 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
let v14 = 0;
v11.e = 0;
const v15 = v14 + 1;
// v15 = .primitive
v14 = v15;
let v18 = 0;
const v19 = v18 + 1;
// v19 = .primitive
v18 = v19;
v11[9] = v7;
const v21 = [1337,1337];
// v21 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v26 = {length:"N0Xx92zvHQ"};
// v26 = .object(ofGroup: Object, withProperties: ["__proto__", "length"])
const v30 = (13.37)[v26];
// v30 = .unknown
let v36 = 0;
const v37 = v36 + 1;
// v37 = .primitive
v36 = v37;
let v41 = 0;
const v42 = v41 + 1;
// v42 = .primitive
v41 = v42;
let v45 = 0;
const v46 = v45 + 1;
// v46 = .primitive
v45 = v46;
let v49 = 0;
const v50 = v49 + 1;
// v50 = .primitive
v49 = v50;
v21.__proto__ = v11;
const v51 = gc();
// v51 = .undefined
}
%NeverOptimizeFunction(main);
main();
