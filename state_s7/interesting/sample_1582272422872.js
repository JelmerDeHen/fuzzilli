function main() {
const v1 = [13.37,13.37,13.37,13.37];
// v1 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v3 = [1337,v1];
// v3 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
let v5 = 1337;
const v11 = {b:2147483647};
// v11 = .object(ofGroup: Object, withProperties: ["b", "__proto__"])
const v12 = {__proto__:Uint8Array,a:v11,constructor:1337,d:"undefined",valueOf:1337,b:13.37};
// v12 = .object(ofGroup: Object, withProperties: ["a", "valueOf", "d", "b", "__proto__", "constructor"])
this.species = Object;
let v19 = 0;
const v20 = {a:v12,__proto__:v5,valueOf:v19,...this,...13.37,...v3,...0};
// v20 = .object(ofGroup: Object, withProperties: ["constructor", "valueOf", "a", "length", "__proto__"], withMethods: ["flatMap", "reduce", "unshift", "findIndex", "toLocaleString", "toString", "find", "reverse", "keys", "includes", "map", "splice", "copyWithin", "fill", "join", "indexOf", "lastIndexOf", "push", "filter", "flat", "values", "every", "reduceRight", "slice", "some", "sort", "shift", "pop", "forEach", "entries", "concat"])
}
%NeverOptimizeFunction(main);
main();
