function main() {
const v1 = [13.37,13.37,13.37,13.37];
// v1 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v3 = [1337,v1];
// v3 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
let v5 = 1337;
const v11 = {b:2147483647};
// v11 = .object(ofGroup: Object, withProperties: ["b", "__proto__"])
const v12 = {__proto__:Uint8Array,a:v11,constructor:1337,d:"undefined",valueOf:1337,b:13.37};
// v12 = .object(ofGroup: Object, withProperties: ["__proto__", "constructor", "d", "a", "valueOf", "b"])
this.species = Object;
delete this.species;
let v20 = 0;
const v21 = {a:v12,__proto__:v5,valueOf:v20,...this,...13.37,...v3,...0};
// v21 = .object(ofGroup: Object, withProperties: ["a", "constructor", "__proto__", "valueOf", "length"], withMethods: ["concat", "keys", "shift", "findIndex", "map", "reduceRight", "pop", "unshift", "splice", "fill", "reverse", "flatMap", "reduce", "lastIndexOf", "join", "slice", "sort", "filter", "some", "flat", "push", "entries", "every", "forEach", "includes", "copyWithin", "toString", "toLocaleString", "values", "indexOf", "find"])
}
%NeverOptimizeFunction(main);
main();
