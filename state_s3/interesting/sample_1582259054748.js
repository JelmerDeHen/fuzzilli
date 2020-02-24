function main() {
const v4 = [1337,1337];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v5 = {b:13.37,d:1607264097,e:1607264097,constructor:v4,valueOf:WeakSet};
// v5 = .object(ofGroup: Object, withProperties: ["b", "constructor", "e", "d", "__proto__", "valueOf"])
let v9 = 0;
const v10 = v9 + 1;
// v10 = .primitive
v9 = v10;
let v13 = 0;
const v14 = v13 + 1;
// v14 = .primitive
v13 = v14;
const v17 = {length:"N0Xx92zvHQ"};
// v17 = .object(ofGroup: Object, withProperties: ["__proto__", "length"])
const v21 = (13.37)[v17];
// v21 = .unknown
let v27 = 0;
const v28 = v27 + 1;
// v28 = .primitive
v27 = v28;
let v32 = 0;
const v33 = v32 + 1;
// v33 = .primitive
v32 = v33;
let v36 = 0;
const v37 = v36 + 1;
// v37 = .primitive
v36 = v37;
let v40 = 0;
const v41 = v40 + 1;
// v41 = .primitive
v40 = v41;
const v46 = Symbol.for("object");
// v46 = .object(ofGroup: Symbol, withProperties: ["__proto__", "description"])
}
%NeverOptimizeFunction(main);
main();
