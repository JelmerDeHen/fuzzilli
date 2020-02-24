function main() {
const v1 = [13.37,13.37,13.37,13.37];
// v1 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v3 = [1337,v1];
// v3 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
let v5 = 1337;
const v11 = {b:2147483647};
// v11 = .object(ofGroup: Object, withProperties: ["__proto__", "b"])
const v12 = {__proto__:Uint8Array,a:v11,constructor:1337,d:"undefined",valueOf:1337,b:13.37};
// v12 = .object(ofGroup: Object, withProperties: ["__proto__", "d", "constructor", "b", "valueOf", "a"])
this.species = Object;
delete this.species;
let v20 = 0;
const v21 = {a:v12,__proto__:v5,valueOf:v20,...this,...13.37,...v3,...0};
// v21 = .object(ofGroup: Object, withProperties: ["length", "constructor", "a", "__proto__", "valueOf"], withMethods: ["map", "toLocaleString", "flat", "values", "forEach", "lastIndexOf", "push", "flatMap", "reduceRight", "reduce", "findIndex", "reverse", "fill", "shift", "slice", "join", "every", "concat", "pop", "toString", "splice", "entries", "indexOf", "includes", "copyWithin", "unshift", "filter", "sort", "keys", "find", "some"])
}
%NeverOptimizeFunction(main);
main();
