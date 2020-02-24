function main() {
const v2 = 13.37 / 1337;
// v2 = .number
let v5 = 0;
const v10 = [13.37];
// v10 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v11 = {__proto__:v10,a:v10,constructor:Number,e:13.37,length:"number",b:13.37};
// v11 = .object(ofGroup: Object, withProperties: ["b", "length", "a", "__proto__", "e"], withMethods: ["constructor"])
const v12 = 13.37 && v11;
// v12 = .boolean
let v15 = 127;
const v18 = String.fromCharCode(v15,3085701344);
// v18 = .string + .object(ofGroup: String, withProperties: ["__proto__", "constructor", "length"], withMethods: ["charCodeAt", "includes", "split", "substring", "concat", "repeat", "slice", "charAt", "trim", "codePointAt", "indexOf", "padEnd", "padStart", "endsWith", "replace", "startsWith", "lastIndexOf"])
let v20 = "p8Xp0R1moN";
v20 = v18;
const v21 = JSON.stringify(v20);
// v21 = .string + .object(ofGroup: String, withProperties: ["__proto__", "constructor", "length"], withMethods: ["charCodeAt", "includes", "split", "substring", "concat", "repeat", "slice", "charAt", "trim", "codePointAt", "indexOf", "padEnd", "padStart", "endsWith", "replace", "startsWith", "lastIndexOf"])
v11[v21] = v2;
let v23 = v12;
const v24 = JSON.stringify(v23);
// v24 = .string + .object(ofGroup: String, withProperties: ["__proto__", "constructor", "length"], withMethods: ["charCodeAt", "includes", "split", "substring", "concat", "repeat", "slice", "charAt", "trim", "codePointAt", "indexOf", "padEnd", "padStart", "endsWith", "replace", "startsWith", "lastIndexOf"])
let v28 = 0;
const v29 = v28 + 1;
// v29 = .primitive
v28 = v29;
const v30 = JSON.parse(v24,2435262485);
// v30 = .unknown
}
%NeverOptimizeFunction(main);
main();
