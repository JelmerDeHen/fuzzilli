function main() {
const v4 = 13.37 / 1337;
// v4 = .number
const v8 = [13.37];
// v8 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v9 = {__proto__:v8,a:v8,constructor:1337,e:13.37,length:"number",b:13.37};
// v9 = .object(ofGroup: Object, withProperties: ["a", "b", "__proto__", "length", "constructor", "e"])
const v10 = 13.37 && v9;
// v10 = .boolean
let v12 = "p8Xp0R1moN";
const v14 = String.fromCharCode(v12,"J*laYCeKB8");
// v14 = .string + .object(ofGroup: String, withProperties: ["length", "__proto__", "constructor"], withMethods: ["trim", "endsWith", "split", "charAt", "padStart", "codePointAt", "substring", "charCodeAt", "replace", "lastIndexOf", "includes", "repeat", "indexOf", "slice", "startsWith", "concat", "padEnd"])
let v15 = "p8Xp0R1moN";
v15 = v14;
v9[v15] = v4;
let v17 = v10;
const v18 = JSON.stringify(v17);
// v18 = .string + .object(ofGroup: String, withProperties: ["length", "__proto__", "constructor"], withMethods: ["trim", "endsWith", "split", "charAt", "padStart", "codePointAt", "substring", "charCodeAt", "replace", "lastIndexOf", "includes", "repeat", "indexOf", "slice", "startsWith", "concat", "padEnd"])
const v20 = JSON.parse(v18,2435262485);
// v20 = .unknown
}
%NeverOptimizeFunction(main);
main();
