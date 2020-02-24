function main() {
const v5 = [1337,1337];
// v5 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v18 = [13.37,13.37,13.37,13.37];
// v18 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v20 = [1337,v18];
// v20 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
let v26 = 1337;
const v33 = {b:2147483647};
// v33 = .object(ofGroup: Object, withProperties: ["__proto__", "b"])
const v34 = {__proto__:Uint8Array,a:v33,constructor:1337,d:"undefined",valueOf:1337,b:13.37};
// v34 = .object(ofGroup: Object, withProperties: ["b", "a", "__proto__", "constructor", "valueOf", "d"])
const v38 = eval(...v5);
// v38 = .string + .object(ofGroup: String, withProperties: ["constructor", "__proto__", "length"], withMethods: ["slice", "concat", "replace", "charCodeAt", "split", "trim", "startsWith", "includes", "indexOf", "charAt", "codePointAt", "repeat", "padStart", "lastIndexOf", "substring", "endsWith", "padEnd"])
let v118 = 0;
const v119 = {a:v34,__proto__:v26,valueOf:v118,...this,...13.37,...v20,...0};
// v119 = .object(ofGroup: Object, withProperties: ["valueOf", "constructor", "__proto__", "length", "a"], withMethods: ["reduce", "every", "find", "slice", "push", "entries", "indexOf", "toLocaleString", "map", "toString", "pop", "copyWithin", "flat", "includes", "fill", "reduceRight", "lastIndexOf", "splice", "values", "concat", "join", "shift", "sort", "filter", "some", "forEach", "flatMap", "unshift", "keys", "findIndex", "reverse"])
}
%NeverOptimizeFunction(main);
main();
