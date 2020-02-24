function main() {
const v3 = 13.37 / 1337;
// v3 = .number
const v7 = [13.37];
// v7 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v8 = {__proto__:v7,a:v7,constructor:1337,e:13.37,length:"number",b:13.37};
// v8 = .object(ofGroup: Object, withProperties: ["constructor", "e", "__proto__", "a", "length", "b"])
const v9 = 13.37 && v8;
// v9 = .boolean
let v11 = "p8Xp0R1moN";
const v14 = String.fromCharCode(v11,3085701344);
// v14 = .string + .object(ofGroup: String, withProperties: ["constructor", "length", "__proto__"], withMethods: ["startsWith", "repeat", "codePointAt", "charCodeAt", "padStart", "padEnd", "concat", "substring", "lastIndexOf", "split", "indexOf", "includes", "slice", "endsWith", "charAt", "trim", "replace"])
let v15 = "p8Xp0R1moN";
v15 = v14;
v8[v15] = v3;
let v17 = v9;
const v18 = JSON.stringify(v17);
// v18 = .string + .object(ofGroup: String, withProperties: ["constructor", "length", "__proto__"], withMethods: ["startsWith", "repeat", "codePointAt", "charCodeAt", "padStart", "padEnd", "concat", "substring", "lastIndexOf", "split", "indexOf", "includes", "slice", "endsWith", "charAt", "trim", "replace"])
const v20 = JSON.parse(v18,2435262485);
// v20 = .unknown
}
%NeverOptimizeFunction(main);
main();
