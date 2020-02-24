function main() {
const v1 = [13.37,13.37,13.37,13.37];
// v1 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v3 = [1337,v1];
// v3 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
let v5 = 1337;
const v11 = {b:2147483647};
// v11 = .object(ofGroup: Object, withProperties: ["b", "__proto__"])
const v12 = {__proto__:Uint8Array,a:v11,constructor:1337,d:"undefined",valueOf:1337,b:13.37};
// v12 = .object(ofGroup: Object, withProperties: ["constructor", "b", "a", "__proto__", "valueOf", "d"])
this.species = Object;
delete this.species;
let v20 = 0;
const v21 = {a:v12,__proto__:v5,valueOf:v20,...this,...13.37,...v3,...0};
// v21 = .object(ofGroup: Object, withProperties: ["length", "valueOf", "__proto__", "constructor", "a"], withMethods: ["entries", "lastIndexOf", "shift", "push", "join", "forEach", "reduce", "copyWithin", "find", "splice", "flatMap", "includes", "pop", "findIndex", "reduceRight", "some", "slice", "keys", "toLocaleString", "unshift", "flat", "reverse", "fill", "map", "filter", "sort", "toString", "concat", "every", "values", "indexOf"])
}
%NeverOptimizeFunction(main);
main();
