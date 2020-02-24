function main() {
const v1 = [13.37,13.37,13.37,13.37];
// v1 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v3 = [1337,v1];
// v3 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
let v5 = 1337;
const v11 = {b:2147483647};
// v11 = .object(ofGroup: Object, withProperties: ["__proto__", "b"])
const v12 = {__proto__:Uint8Array,a:v11,constructor:1337,d:"undefined",valueOf:1337,b:13.37};
// v12 = .object(ofGroup: Object, withProperties: ["valueOf", "d", "__proto__", "b", "a", "constructor"])
this.species = Object;
delete this.species;
let v20 = 0;
const v21 = {a:v12,__proto__:v5,valueOf:v20,...this,...13.37,...v3,...0};
// v21 = .object(ofGroup: Object, withProperties: ["constructor", "__proto__", "a", "valueOf", "length"], withMethods: ["indexOf", "splice", "entries", "shift", "every", "copyWithin", "sort", "keys", "join", "findIndex", "some", "values", "fill", "slice", "push", "toLocaleString", "reduce", "flatMap", "unshift", "forEach", "filter", "reverse", "find", "reduceRight", "map", "toString", "pop", "concat", "flat", "includes", "lastIndexOf"])
}
%NeverOptimizeFunction(main);
main();
