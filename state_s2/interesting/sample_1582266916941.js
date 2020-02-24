function main() {
const v1 = {a:isFinite};
// v1 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["a"])
let v5 = 0;
let v8 = 0;
let v11 = 0;
const v16 = [1337,1337,1337,1337];
// v16 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v17 = {valueOf:JSON,length:"search"};
// v17 = .object(ofGroup: Object, withProperties: ["__proto__", "length", "valueOf"])
JSON[v17] = 13.37;
const v21 = JSON.stringify(JSON,JSON,2153514987);
// v21 = .string + .object(ofGroup: String, withProperties: ["constructor", "length", "__proto__"], withMethods: ["startsWith", "repeat", "codePointAt", "charCodeAt", "padStart", "padEnd", "concat", "substring", "lastIndexOf", "split", "indexOf", "includes", "slice", "endsWith", "charAt", "trim", "replace"])
const v22 = JSON.parse(v21,Object);
// v22 = .unknown
}
%NeverOptimizeFunction(main);
main();
