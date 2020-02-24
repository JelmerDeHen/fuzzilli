function main() {
const v2 = [1337];
// v2 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
let v3 = v2;
let v5 = undefined;
let v9 = 0;
let v12 = 0;
const v17 = v12 + 1;
// v17 = .primitive
v12 = v17;
const v18 = v9 + 1;
// v18 = .primitive
v9 = v18;
const v22 = {b:1337,e:1337,toString:Uint16Array,d:Uint16Array};
// v22 = .object(ofGroup: Object, withProperties: ["e", "d", "__proto__", "b", "toString"])
const v29 = {b:1337,e:1337,toString:Uint16Array,d:Uint16Array};
// v29 = .object(ofGroup: Object, withProperties: ["b", "toString", "d", "e", "__proto__"])
const v31 = Symbol.toStringTag;
// v31 = .object(ofGroup: Symbol, withProperties: ["__proto__", "description"])
v22[v31] = "boolean";
v29[-3468252467] = -4294967297;
const v35 = 1337 == 13.37;
// v35 = .boolean
const v37 = Object();
// v37 = .object()
let v40 = 0;
const v41 = v40 + 1;
// v41 = .primitive
v40 = v41;
}
%NeverOptimizeFunction(main);
main();
