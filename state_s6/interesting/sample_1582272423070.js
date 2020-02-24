function main() {
const v1 = [13.37,13.37,13.37,13.37];
// v1 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v3 = [1337,v1];
// v3 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
let v5 = 1337;
const v11 = {b:2147483647};
// v11 = .object(ofGroup: Object, withProperties: ["__proto__", "b"])
const v12 = {__proto__:Uint8Array,a:v11,constructor:1337,d:"undefined",valueOf:1337,b:13.37};
// v12 = .object(ofGroup: Object, withProperties: ["b", "d", "a", "constructor", "valueOf", "__proto__"])
this.species = Object;
let v19 = 0;
const v20 = {a:v12,__proto__:v5,valueOf:v19,...this,...13.37,...v3,...0};
// v20 = .object(ofGroup: Object, withProperties: ["__proto__", "constructor", "a", "valueOf", "length"], withMethods: ["flatMap", "concat", "filter", "splice", "entries", "some", "reduce", "forEach", "values", "slice", "sort", "findIndex", "map", "reverse", "includes", "fill", "every", "pop", "toLocaleString", "push", "reduceRight", "lastIndexOf", "shift", "flat", "toString", "copyWithin", "join", "keys", "unshift", "find", "indexOf"])
}
%NeverOptimizeFunction(main);
main();
