function main() {
const v1 = [13.37,13.37,13.37,13.37];
// v1 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v3 = [1337,v1];
// v3 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
let v5 = 1337;
const v11 = {b:2147483647};
// v11 = .object(ofGroup: Object, withProperties: ["b", "__proto__"])
const v12 = {__proto__:Uint8Array,a:v11,constructor:1337,d:"undefined",valueOf:1337,b:13.37};
// v12 = .object(ofGroup: Object, withProperties: ["a", "d", "constructor", "__proto__", "b", "valueOf"])
this.species = Object;
let v19 = 0;
const v20 = {a:v12,__proto__:v5,valueOf:v19,...this,...13.37,...v3,...0};
// v20 = .object(ofGroup: Object, withProperties: ["__proto__", "a", "constructor", "length", "valueOf"], withMethods: ["filter", "toLocaleString", "indexOf", "join", "some", "push", "map", "reduceRight", "keys", "reverse", "values", "splice", "sort", "copyWithin", "slice", "flatMap", "concat", "includes", "forEach", "unshift", "flat", "entries", "shift", "toString", "find", "every", "lastIndexOf", "reduce", "fill", "findIndex", "pop"])
}
%NeverOptimizeFunction(main);
main();
