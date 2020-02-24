function main() {
const v2 = [1337,1337,1337,1337];
// v2 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v5 = [13.37,13.37,13.37];
// v5 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v9 = Symbol.species;
// v9 = .object(ofGroup: Symbol, withProperties: ["__proto__", "description"])
const v12 = Object();
// v12 = .object()
const v15 = [13.37,13.37,13.37];
// v15 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v18 = {c:13.37};
// v18 = .object(ofGroup: Object, withProperties: ["c", "__proto__"])
let v21 = 0;
const v22 = v21 + 1;
// v22 = .primitive
v21 = v22;
let v25 = 0;
const v26 = v25 + 1;
// v26 = .primitive
v25 = v26;
let v35 = 0;
let v41 = Reflect;
const v42 = {};
// v42 = .object(ofGroup: Object, withProperties: ["__proto__"])
let v43 = v42;
const v45 = (1337)[v43];
// v45 = .unknown
const v46 = {c:0,b:v5,valueOf:v12,...9007199254740993,...13.37,...v2,...v15,...v18,...v9};
// v46 = .object(ofGroup: Object, withProperties: ["length", "constructor", "__proto__", "description", "c", "valueOf", "b"], withMethods: ["findIndex", "toString", "indexOf", "keys", "sort", "map", "join", "lastIndexOf", "unshift", "push", "splice", "every", "entries", "flatMap", "pop", "reverse", "slice", "copyWithin", "includes", "find", "reduce", "some", "fill", "concat", "filter", "forEach", "flat", "reduceRight", "values", "shift", "toLocaleString"])
}
%NeverOptimizeFunction(main);
main();
