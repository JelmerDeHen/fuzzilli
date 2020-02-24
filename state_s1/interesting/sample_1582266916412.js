function main() {
const v1 = {a:isFinite};
// v1 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["a"])
let v5 = 0;
let v8 = 0;
let v11 = 0;
const v16 = [1337,1337,1337,1337];
// v16 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v17 = {valueOf:JSON,length:"search"};
// v17 = .object(ofGroup: Object, withProperties: ["valueOf", "length", "__proto__"])
JSON[v17] = 13.37;
const v21 = JSON.stringify(JSON,JSON,2153514987);
// v21 = .string + .object(ofGroup: String, withProperties: ["length", "constructor", "__proto__"], withMethods: ["endsWith", "split", "padEnd", "repeat", "lastIndexOf", "substring", "slice", "startsWith", "includes", "charCodeAt", "padStart", "concat", "trim", "replace", "indexOf", "charAt", "codePointAt"])
const v22 = JSON.parse(v21,Object);
// v22 = .unknown
}
%NeverOptimizeFunction(main);
main();
