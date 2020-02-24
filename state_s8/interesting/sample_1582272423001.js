function main() {
const v1 = [13.37,13.37,13.37,13.37];
// v1 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v3 = [1337,v1];
// v3 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
let v5 = 1337;
const v11 = {b:2147483647};
// v11 = .object(ofGroup: Object, withProperties: ["b", "__proto__"])
const v12 = {__proto__:Uint8Array,a:v11,constructor:1337,d:"undefined",valueOf:1337,b:13.37};
// v12 = .object(ofGroup: Object, withProperties: ["__proto__", "a", "b", "constructor", "d", "valueOf"])
this.species = Object;
let v19 = 0;
const v20 = {a:v12,__proto__:v5,valueOf:v19,...this,...13.37,...v3,...0};
// v20 = .object(ofGroup: Object, withProperties: ["__proto__", "length", "valueOf", "a", "constructor"], withMethods: ["splice", "every", "join", "some", "includes", "findIndex", "flatMap", "pop", "filter", "fill", "keys", "find", "map", "entries", "concat", "toString", "copyWithin", "unshift", "forEach", "reduce", "indexOf", "sort", "shift", "slice", "reduceRight", "lastIndexOf", "values", "toLocaleString", "flat", "push", "reverse"])
}
%NeverOptimizeFunction(main);
main();
