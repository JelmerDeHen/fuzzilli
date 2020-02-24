function main() {
const v10 = [-256,-256];
// v10 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v11 = {b:13.37,d:1607264097,e:1607264097,constructor:v10,valueOf:WeakSet};
// v11 = .object(ofGroup: Object, withProperties: ["__proto__", "b", "constructor", "d", "e", "valueOf"])
const v21 = [13.37,13.37,13.37];
// v21 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v23 = [1337,1337];
// v23 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v24 = [v23,v23,v23];
// v24 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v25 = {d:"undefined",e:v21,__proto__:v23,c:v23,toString:v24};
// v25 = .object(ofGroup: Object, withProperties: ["__proto__", "toString", "d", "c", "e"])
let v26 = v25;
let v34 = 0;
const v35 = v34 + 1;
// v35 = .primitive
v34 = v35;
const v37 = {a:13.37,__proto__:"undefined",size:v26,toString:v34,valueOf:v11,...Object};
// v37 = .object(ofGroup: Object, withProperties: ["size", "a", "__proto__", "valueOf", "prototype", "toString"], withMethods: ["create", "setPrototypeOf", "defineProperties", "isSealed", "entries", "is", "seal", "values", "preventExtensions", "getOwnPropertyNames", "getOwnPropertyDescriptors", "getPrototypeOf", "getOwnPropertyDescriptor", "fromEntries", "getOwnPropertySymbols", "isExtensible", "assign", "keys", "isFrozen", "freeze", "defineProperty"])
}
%NeverOptimizeFunction(main);
main();
