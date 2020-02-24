function main() {
const v9 = [1337];
// v9 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v10 = {b:v9,e:Uint16Array,a:13.37,length:"iterator",valueOf:4294967297};
// v10 = .object(ofGroup: Object, withProperties: ["__proto__", "e", "a", "b", "length", "valueOf"])
let v15 = 0;
const v16 = v15 + 1;
// v16 = .primitive
v15 = v16;
let v19 = 0;
const v20 = v19 + 1;
// v20 = .primitive
v19 = v20;
const v21 = {...v10,...0,...v19};
// v21 = .object(ofGroup: Object, withProperties: ["__proto__", "a", "length", "b", "valueOf", "e"])
const v24 = Symbol.replace;
// v24 = .object(ofGroup: Symbol, withProperties: ["__proto__", "description"])
const v25 = "iterator"[v24];
// v25 = .unknown
delete v21.length;
const v27 = {set:v25};
// v27 = .object(ofGroup: Object, withProperties: ["__proto__", "set"])
const v29 = Object.defineProperty(v21,"length",v27);
// v29 = .undefined
const v30 = [1337,1337];
// v30 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
}
%NeverOptimizeFunction(main);
main();
