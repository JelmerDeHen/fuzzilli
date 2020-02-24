function main() {
const v4 = 13.37 / 1337;
// v4 = .number
const v8 = [13.37];
// v8 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v9 = {__proto__:v8,a:v8,constructor:1337,e:13.37,length:"number",b:13.37};
// v9 = .object(ofGroup: Object, withProperties: ["constructor", "b", "e", "length", "__proto__", "a"])
const v10 = 13.37 && v9;
// v10 = .boolean
let v12 = "p8Xp0R1moN";
const v14 = String.fromCharCode(v12,"J*laYCeKB8");
// v14 = .string + .object(ofGroup: String, withProperties: ["length", "__proto__", "constructor"], withMethods: ["replace", "padStart", "charCodeAt", "repeat", "indexOf", "trim", "lastIndexOf", "padEnd", "concat", "split", "startsWith", "codePointAt", "endsWith", "charAt", "slice", "substring", "includes"])
let v15 = "p8Xp0R1moN";
v15 = v14;
v9[v15] = v4;
let v17 = v10;
const v18 = JSON.stringify(v17);
// v18 = .string + .object(ofGroup: String, withProperties: ["length", "__proto__", "constructor"], withMethods: ["replace", "padStart", "charCodeAt", "repeat", "indexOf", "trim", "lastIndexOf", "padEnd", "concat", "split", "startsWith", "codePointAt", "endsWith", "charAt", "slice", "substring", "includes"])
const v20 = JSON.parse(v18,2435262485);
// v20 = .unknown
}
%NeverOptimizeFunction(main);
main();
