function main() {
const v2 = 13.37 / 1337;
// v2 = .number
const v7 = [13.37];
// v7 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v8 = {__proto__:v7,a:v7,constructor:Number,e:13.37,length:"number",b:13.37};
// v8 = .object(ofGroup: Object, withProperties: ["length", "b", "__proto__", "e", "a"], withMethods: ["constructor"])
const v9 = 13.37 && v8;
// v9 = .boolean
let v12 = "p8Xp0R1moN";
const v13 = JSON.stringify(v12);
// v13 = .string + .object(ofGroup: String, withProperties: ["constructor", "__proto__", "length"], withMethods: ["indexOf", "padEnd", "replace", "charAt", "trim", "endsWith", "padStart", "charCodeAt", "codePointAt", "split", "includes", "startsWith", "repeat", "lastIndexOf", "concat", "substring", "slice"])
v8[v13] = v2;
let v15 = v9;
const v16 = JSON.stringify(v15);
// v16 = .string + .object(ofGroup: String, withProperties: ["constructor", "__proto__", "length"], withMethods: ["indexOf", "padEnd", "replace", "charAt", "trim", "endsWith", "padStart", "charCodeAt", "codePointAt", "split", "includes", "startsWith", "repeat", "lastIndexOf", "concat", "substring", "slice"])
const v18 = JSON.parse(v16,2435262485);
// v18 = .unknown
}
%NeverOptimizeFunction(main);
main();
