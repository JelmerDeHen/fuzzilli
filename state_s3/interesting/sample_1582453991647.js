function main() {
const v2 = 13.37 / 1337;
// v2 = .number
let v5 = 0;
const v10 = [13.37];
// v10 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v11 = {__proto__:v10,a:v10,constructor:Number,e:13.37,length:"number",b:13.37};
// v11 = .object(ofGroup: Object, withProperties: ["b", "a", "length", "__proto__", "e"], withMethods: ["constructor"])
const v12 = 13.37 && v11;
// v12 = .boolean
let v15 = 127;
const v18 = String.fromCharCode(v15,3085701344);
// v18 = .string + .object(ofGroup: String, withProperties: ["constructor", "__proto__", "length"], withMethods: ["indexOf", "padEnd", "replace", "charAt", "trim", "endsWith", "padStart", "charCodeAt", "codePointAt", "split", "includes", "startsWith", "repeat", "lastIndexOf", "concat", "substring", "slice"])
let v20 = "p8Xp0R1moN";
v20 = v18;
const v21 = JSON.stringify(v20);
// v21 = .string + .object(ofGroup: String, withProperties: ["constructor", "__proto__", "length"], withMethods: ["indexOf", "padEnd", "replace", "charAt", "trim", "endsWith", "padStart", "charCodeAt", "codePointAt", "split", "includes", "startsWith", "repeat", "lastIndexOf", "concat", "substring", "slice"])
v11[v21] = v2;
let v23 = v12;
const v24 = JSON.stringify(v23);
// v24 = .string + .object(ofGroup: String, withProperties: ["constructor", "__proto__", "length"], withMethods: ["indexOf", "padEnd", "replace", "charAt", "trim", "endsWith", "padStart", "charCodeAt", "codePointAt", "split", "includes", "startsWith", "repeat", "lastIndexOf", "concat", "substring", "slice"])
let v28 = 0;
const v29 = v28 + 1;
// v29 = .primitive
v28 = v29;
const v30 = JSON.parse(v24,2435262485);
// v30 = .unknown
}
%NeverOptimizeFunction(main);
main();
