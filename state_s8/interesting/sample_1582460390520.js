function main() {
const v4 = 13.37 / 1337;
// v4 = .number
const v8 = [13.37];
// v8 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v9 = {__proto__:v8,a:v8,constructor:1337,e:13.37,length:"number",b:13.37};
// v9 = .object(ofGroup: Object, withProperties: ["__proto__", "length", "b", "a", "e", "constructor"])
const v10 = 13.37 && v9;
// v10 = .boolean
let v12 = "p8Xp0R1moN";
const v14 = String.fromCharCode(v12,"J*laYCeKB8");
// v14 = .string + .object(ofGroup: String, withProperties: ["__proto__", "constructor", "length"], withMethods: ["charCodeAt", "includes", "split", "substring", "concat", "repeat", "slice", "charAt", "trim", "codePointAt", "indexOf", "padEnd", "padStart", "endsWith", "replace", "startsWith", "lastIndexOf"])
let v15 = "p8Xp0R1moN";
v15 = v14;
v9[v15] = v4;
let v17 = v10;
const v18 = JSON.stringify(v17);
// v18 = .string + .object(ofGroup: String, withProperties: ["__proto__", "constructor", "length"], withMethods: ["charCodeAt", "includes", "split", "substring", "concat", "repeat", "slice", "charAt", "trim", "codePointAt", "indexOf", "padEnd", "padStart", "endsWith", "replace", "startsWith", "lastIndexOf"])
const v20 = JSON.parse(v18,2435262485);
// v20 = .unknown
}
%NeverOptimizeFunction(main);
main();
