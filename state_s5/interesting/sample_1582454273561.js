function main() {
const v2 = 13.37 / 1337;
// v2 = .number
const v7 = [13.37];
// v7 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v8 = {__proto__:v7,a:v7,constructor:Number,e:13.37,length:"number",b:13.37};
// v8 = .object(ofGroup: Object, withProperties: ["__proto__", "e", "b", "a", "length"], withMethods: ["constructor"])
const v9 = 13.37 && v8;
// v9 = .boolean
let v12 = "p8Xp0R1moN";
const v13 = JSON.stringify(v12);
// v13 = .string + .object(ofGroup: String, withProperties: ["length", "__proto__", "constructor"], withMethods: ["replace", "padStart", "charCodeAt", "repeat", "indexOf", "trim", "lastIndexOf", "padEnd", "concat", "split", "startsWith", "codePointAt", "endsWith", "charAt", "slice", "substring", "includes"])
v8[v13] = v2;
let v15 = v9;
const v16 = JSON.stringify(v15);
// v16 = .string + .object(ofGroup: String, withProperties: ["length", "__proto__", "constructor"], withMethods: ["replace", "padStart", "charCodeAt", "repeat", "indexOf", "trim", "lastIndexOf", "padEnd", "concat", "split", "startsWith", "codePointAt", "endsWith", "charAt", "slice", "substring", "includes"])
const v18 = JSON.parse(v16,2435262485);
// v18 = .unknown
}
%NeverOptimizeFunction(main);
main();
