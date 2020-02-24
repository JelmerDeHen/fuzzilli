function main() {
const v5 = {b:2147483647};
// v5 = .object(ofGroup: Object, withProperties: ["__proto__", "b"])
const v6 = {__proto__:Uint8Array,a:v5,constructor:1337,d:"undefined",valueOf:1337,b:13.37};
// v6 = .object(ofGroup: Object, withProperties: ["__proto__", "d", "valueOf", "constructor", "b", "a"])
const v12 = [1337];
// v12 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v13 = {b:v12,__proto__:Uint16Array,a:13.37,length:"iterator",valueOf:4294967297};
// v13 = .object(ofGroup: Object, withProperties: ["length", "valueOf", "b", "__proto__", "a"])
const v17 = 1337 == 13.37;
// v17 = .boolean
const v21 = [13.37,13.37,13.37,13.37,13.37];
// v21 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
}
%NeverOptimizeFunction(main);
main();
