function main() {
const v2 = 13.37 / 1337;
// v2 = .number
const v7 = [13.37];
// v7 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v8 = {__proto__:v7,a:v7,constructor:Number,e:13.37,length:"number",b:13.37};
// v8 = .object(ofGroup: Object, withProperties: ["length", "__proto__", "b", "e", "a"], withMethods: ["constructor"])
const v9 = 13.37 && v8;
// v9 = .boolean
let v12 = "p8Xp0R1moN";
const v13 = JSON.stringify(v12);
// v13 = .string + .object(ofGroup: String, withProperties: ["constructor", "length", "__proto__"], withMethods: ["startsWith", "repeat", "codePointAt", "charCodeAt", "padStart", "padEnd", "concat", "substring", "lastIndexOf", "split", "indexOf", "includes", "slice", "endsWith", "charAt", "trim", "replace"])
v8[v13] = v2;
let v15 = v9;
const v16 = JSON.stringify(v15);
// v16 = .string + .object(ofGroup: String, withProperties: ["constructor", "length", "__proto__"], withMethods: ["startsWith", "repeat", "codePointAt", "charCodeAt", "padStart", "padEnd", "concat", "substring", "lastIndexOf", "split", "indexOf", "includes", "slice", "endsWith", "charAt", "trim", "replace"])
const v18 = JSON.parse(v16,2435262485);
// v18 = .unknown
}
%NeverOptimizeFunction(main);
main();
