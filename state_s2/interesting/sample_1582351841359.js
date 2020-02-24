function main() {
const v5 = [1337];
// v5 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v6 = {__proto__:v5,a:v5,constructor:Number,e:13.37,length:"number",b:13.37};
// v6 = .object(ofGroup: Object, withProperties: ["length", "b", "a", "__proto__", "e"], withMethods: ["constructor"])
const v7 = 13.37 && v6;
// v7 = .boolean
let v10 = 127;
const v13 = String.fromCharCode(v10,3085701344);
// v13 = .string + .object(ofGroup: String, withProperties: ["constructor", "length", "__proto__"], withMethods: ["startsWith", "repeat", "codePointAt", "charCodeAt", "padStart", "padEnd", "concat", "substring", "lastIndexOf", "split", "indexOf", "includes", "slice", "endsWith", "charAt", "trim", "replace"])
let v15 = "p8Xp0R1moN";
v15 = v13;
const v16 = JSON.stringify(v15);
// v16 = .string + .object(ofGroup: String, withProperties: ["constructor", "length", "__proto__"], withMethods: ["startsWith", "repeat", "codePointAt", "charCodeAt", "padStart", "padEnd", "concat", "substring", "lastIndexOf", "split", "indexOf", "includes", "slice", "endsWith", "charAt", "trim", "replace"])
v6[v16] = 13.37;
let v18 = v7;
const v19 = JSON.stringify(v18);
// v19 = .string + .object(ofGroup: String, withProperties: ["constructor", "length", "__proto__"], withMethods: ["startsWith", "repeat", "codePointAt", "charCodeAt", "padStart", "padEnd", "concat", "substring", "lastIndexOf", "split", "indexOf", "includes", "slice", "endsWith", "charAt", "trim", "replace"])
const v21 = JSON.parse(v19,2435262485);
// v21 = .unknown
}
%NeverOptimizeFunction(main);
main();
