function main() {
const v2 = 13.37 / 1337;
// v2 = .number
const v7 = [13.37];
// v7 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v8 = {__proto__:v7,a:v7,constructor:Number,e:13.37,length:"number",b:13.37};
// v8 = .object(ofGroup: Object, withProperties: ["e", "b", "length", "__proto__", "a"], withMethods: ["constructor"])
const v9 = 13.37 && v8;
// v9 = .boolean
let v12 = "p8Xp0R1moN";
const v13 = JSON.stringify(v12);
// v13 = .string + .object(ofGroup: String, withProperties: ["__proto__", "constructor", "length"], withMethods: ["charCodeAt", "includes", "split", "substring", "concat", "repeat", "slice", "charAt", "trim", "codePointAt", "indexOf", "padEnd", "padStart", "endsWith", "replace", "startsWith", "lastIndexOf"])
v8[v13] = v2;
let v15 = v9;
const v16 = JSON.stringify(v15);
// v16 = .string + .object(ofGroup: String, withProperties: ["__proto__", "constructor", "length"], withMethods: ["charCodeAt", "includes", "split", "substring", "concat", "repeat", "slice", "charAt", "trim", "codePointAt", "indexOf", "padEnd", "padStart", "endsWith", "replace", "startsWith", "lastIndexOf"])
const v18 = JSON.parse(v16,2435262485);
// v18 = .unknown
}
%NeverOptimizeFunction(main);
main();
