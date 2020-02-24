function main() {
const v9 = [1337];
// v9 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v10 = {b:v9,e:Uint16Array,a:13.37,length:"iterator",valueOf:4294967297};
// v10 = .object(ofGroup: Object, withProperties: ["b", "a", "valueOf", "__proto__", "length", "e"])
let v15 = 0;
const v16 = v15 + 1;
// v16 = .primitive
v15 = v16;
let v19 = 0;
const v20 = v19 + 1;
// v20 = .primitive
v19 = v20;
const v21 = {...v10,...0,...v19};
// v21 = .object(ofGroup: Object, withProperties: ["length", "e", "a", "__proto__", "b", "valueOf"])
const v24 = Symbol.replace;
// v24 = .object(ofGroup: Symbol, withProperties: ["description", "__proto__"])
const v25 = "iterator"[v24];
// v25 = .unknown
delete v21.length;
const v27 = {set:v25};
// v27 = .object(ofGroup: Object, withProperties: ["__proto__", "set"])
const v29 = Object.defineProperty(v21,"length",v27);
// v29 = .undefined
const v30 = [1337,1337];
// v30 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
}
%NeverOptimizeFunction(main);
main();
