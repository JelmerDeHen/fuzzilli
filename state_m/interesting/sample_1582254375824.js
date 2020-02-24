function main() {
const v4 = [-2.0,-2.0,-2.0];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v6 = [1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v7 = [v6,v6,v6];
// v7 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v8 = {d:"undefined",e:v4,__proto__:v6,c:v6,toString:v7};
// v8 = .object(ofGroup: Object, withProperties: ["toString", "e", "c", "d", "__proto__"])
const v9 = {b:-2.0,d:1607264097,e:1607264097,constructor:v6,valueOf:WeakSet};
// v9 = .object(ofGroup: Object, withProperties: ["__proto__", "constructor", "e", "d", "valueOf", "b"])
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
