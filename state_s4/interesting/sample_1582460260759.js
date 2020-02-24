function main() {
const v3 = 13.37 / 1337;
// v3 = .number
const v7 = [13.37];
// v7 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v8 = {__proto__:v7,a:v7,constructor:1337,e:13.37,length:"number",b:13.37};
// v8 = .object(ofGroup: Object, withProperties: ["a", "__proto__", "length", "e", "b", "constructor"])
const v9 = 13.37 && v8;
// v9 = .boolean
let v11 = "p8Xp0R1moN";
const v14 = String.fromCharCode(v11,3085701344);
// v14 = .string + .object(ofGroup: String, withProperties: ["length", "constructor", "__proto__"], withMethods: ["padEnd", "substring", "charAt", "split", "includes", "padStart", "trim", "charCodeAt", "startsWith", "lastIndexOf", "replace", "repeat", "concat", "slice", "indexOf", "endsWith", "codePointAt"])
let v15 = "p8Xp0R1moN";
v15 = v14;
v8[v15] = v3;
let v17 = v9;
const v18 = JSON.stringify(v17);
// v18 = .string + .object(ofGroup: String, withProperties: ["length", "constructor", "__proto__"], withMethods: ["padEnd", "substring", "charAt", "split", "includes", "padStart", "trim", "charCodeAt", "startsWith", "lastIndexOf", "replace", "repeat", "concat", "slice", "indexOf", "endsWith", "codePointAt"])
const v20 = JSON.parse(v18,2435262485);
// v20 = .unknown
}
%NeverOptimizeFunction(main);
main();
