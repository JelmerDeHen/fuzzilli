function main() {
let v2 = 0;
function v3(v4,v5) {
    return v2;
}
const v7 = Symbol.toPrimitive;
// v7 = .object(ofGroup: Symbol, withProperties: ["__proto__", "description"])
Symbol[v7] = v3;
const v8 = Symbol(Symbol);
// v8 = .object(ofGroup: Symbol, withProperties: ["__proto__", "description"])
const v9 = v2 + 1;
// v9 = .primitive
v2 = v9;
const v16 = [13.37,13.37,13.37];
// v16 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v18 = [1337,1337];
// v18 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v19 = [v18,v18,v18];
// v19 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v20 = {d:"undefined",e:v16,__proto__:v18,c:v18,toString:v19};
// v20 = .object(ofGroup: Object, withProperties: ["e", "toString", "c", "__proto__", "d"])
let v21 = v20;
const v22 = [1337,1337];
// v22 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v23 = {b:13.37,d:1607264097,e:1607264097,constructor:v22,valueOf:WeakSet};
// v23 = .object(ofGroup: Object, withProperties: ["valueOf", "d", "__proto__", "constructor", "e", "b"])
const v25 = [13.37,13.37,13.37];
// v25 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
let v30 = 0;
let v32 = 0;
}
%NeverOptimizeFunction(main);
main();
