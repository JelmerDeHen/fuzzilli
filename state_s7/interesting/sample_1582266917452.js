function main() {
const v1 = {a:isFinite};
// v1 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["a"])
let v5 = 0;
let v8 = 0;
let v11 = 0;
const v16 = [1337,1337,1337,1337];
// v16 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v17 = {valueOf:JSON,length:"search"};
// v17 = .object(ofGroup: Object, withProperties: ["__proto__", "length", "valueOf"])
JSON[v17] = 13.37;
const v21 = JSON.stringify(JSON,JSON,2153514987);
// v21 = .string + .object(ofGroup: String, withProperties: ["length", "__proto__", "constructor"], withMethods: ["trim", "endsWith", "split", "charAt", "padStart", "codePointAt", "substring", "charCodeAt", "replace", "lastIndexOf", "includes", "repeat", "indexOf", "slice", "startsWith", "concat", "padEnd"])
const v22 = JSON.parse(v21,Object);
// v22 = .unknown
}
%NeverOptimizeFunction(main);
main();
