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
// v16 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v18 = [1337,1337];
// v18 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v19 = [v18,v18,v18];
// v19 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v20 = {d:"undefined",e:v16,__proto__:v18,c:v18,toString:v19};
// v20 = .object(ofGroup: Object, withProperties: ["__proto__", "c", "e", "toString", "d"])
let v21 = v20;
const v22 = [1337,1337];
// v22 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v23 = {b:13.37,d:1607264097,e:1607264097,constructor:v22,valueOf:WeakSet};
// v23 = .object(ofGroup: Object, withProperties: ["e", "d", "b", "valueOf", "constructor", "__proto__"])
const v25 = [13.37,13.37,13.37];
// v25 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
let v30 = 0;
let v32 = 0;
}
%NeverOptimizeFunction(main);
main();
