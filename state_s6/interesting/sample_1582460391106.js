function main() {
const v4 = 13.37 / 1337;
// v4 = .number
const v8 = [13.37];
// v8 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v9 = {__proto__:v8,a:v8,constructor:1337,e:13.37,length:"number",b:13.37};
// v9 = .object(ofGroup: Object, withProperties: ["constructor", "a", "e", "length", "b", "__proto__"])
const v10 = 13.37 && v9;
// v10 = .boolean
let v12 = "p8Xp0R1moN";
const v14 = String.fromCharCode(v12,"J*laYCeKB8");
// v14 = .string + .object(ofGroup: String, withProperties: ["constructor", "__proto__", "length"], withMethods: ["slice", "concat", "replace", "charCodeAt", "split", "trim", "startsWith", "includes", "indexOf", "charAt", "codePointAt", "repeat", "padStart", "lastIndexOf", "substring", "endsWith", "padEnd"])
let v15 = "p8Xp0R1moN";
v15 = v14;
v9[v15] = v4;
let v17 = v10;
const v18 = JSON.stringify(v17);
// v18 = .string + .object(ofGroup: String, withProperties: ["constructor", "__proto__", "length"], withMethods: ["slice", "concat", "replace", "charCodeAt", "split", "trim", "startsWith", "includes", "indexOf", "charAt", "codePointAt", "repeat", "padStart", "lastIndexOf", "substring", "endsWith", "padEnd"])
const v20 = JSON.parse(v18,2435262485);
// v20 = .unknown
}
%NeverOptimizeFunction(main);
main();
