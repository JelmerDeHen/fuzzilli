function main() {
const v4 = [-2.0,-2.0,-2.0];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v6 = [1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v7 = [v6,v6,v6];
// v7 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v8 = {d:"undefined",e:v4,__proto__:v6,c:v6,toString:v7};
// v8 = .object(ofGroup: Object, withProperties: ["__proto__", "d", "c", "toString", "e"])
const v9 = {b:-2.0,d:1607264097,e:1607264097,constructor:v6,valueOf:WeakSet};
// v9 = .object(ofGroup: Object, withProperties: ["__proto__", "d", "b", "constructor", "e", "valueOf"])
let v10 = v8;
let v30 = 0;
const v31 = v30 + 1;
// v31 = .primitive
const v34 = v10.push(1337,v9,v4);
// v34 = .unknown
const v35 = 1607264097 & v31;
// v35 = .integer
}
%NeverOptimizeFunction(main);
main();
