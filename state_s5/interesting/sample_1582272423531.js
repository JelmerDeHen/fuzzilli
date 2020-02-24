function main() {
const v1 = [13.37,13.37,13.37,13.37];
// v1 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v3 = [1337,v1];
// v3 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
let v5 = 1337;
const v11 = {b:2147483647};
// v11 = .object(ofGroup: Object, withProperties: ["b", "__proto__"])
const v12 = {__proto__:Uint8Array,a:v11,constructor:1337,d:"undefined",valueOf:1337,b:13.37};
// v12 = .object(ofGroup: Object, withProperties: ["a", "__proto__", "valueOf", "d", "constructor", "b"])
this.species = Object;
let v19 = 0;
const v20 = {a:v12,__proto__:v5,valueOf:v19,...this,...13.37,...v3,...0};
// v20 = .object(ofGroup: Object, withProperties: ["a", "length", "__proto__", "constructor", "valueOf"], withMethods: ["every", "reverse", "keys", "copyWithin", "indexOf", "splice", "fill", "join", "toLocaleString", "unshift", "reduceRight", "flatMap", "findIndex", "pop", "push", "lastIndexOf", "filter", "entries", "slice", "values", "sort", "shift", "some", "reduce", "find", "toString", "concat", "map", "includes", "flat", "forEach"])
}
%NeverOptimizeFunction(main);
main();
