function main() {
const v4 = String.fromCodePoint(0,65535,0,4);
// v4 = .string + .object(ofGroup: String, withProperties: ["constructor", "__proto__", "length"], withMethods: ["indexOf", "padEnd", "replace", "charAt", "trim", "endsWith", "padStart", "charCodeAt", "codePointAt", "split", "includes", "startsWith", "repeat", "lastIndexOf", "concat", "substring", "slice"])
const v5 = [];
// v5 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v8 = [1337,1337];
// v8 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
let v21 = 0;
let v24 = 0;
const v25 = v5 == v8;
// v25 = .boolean
const v26 = v21 + 1;
// v26 = .primitive
v21 = v26;
let v29 = 0;
v5[v4] = WeakSet;
}
%NeverOptimizeFunction(main);
main();
