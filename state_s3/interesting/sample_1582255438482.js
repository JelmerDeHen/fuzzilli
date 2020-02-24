function main() {
const v5 = [1337];
// v5 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v6 = {b:v5,e:Uint16Array,a:13.37,length:"iterator",valueOf:4294967297};
// v6 = .object(ofGroup: Object, withProperties: ["valueOf", "a", "b", "__proto__", "e", "length"])
const v23 = [1337];
// v23 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v24 = {b:v23,e:Uint16Array,a:13.37,length:"iterator",valueOf:"iterator"};
// v24 = .object(ofGroup: Object, withProperties: ["valueOf", "__proto__", "b", "e", "a", "length"])
const v26 = {set:Object,get:Object};
// v26 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["set", "get"])
const v28 = Object.defineProperty(v6,-1284215653,v26);
// v28 = .undefined
}
%NeverOptimizeFunction(main);
main();
