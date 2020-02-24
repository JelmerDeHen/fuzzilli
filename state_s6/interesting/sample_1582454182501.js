function main() {
const v2 = 13.37 / 1337;
// v2 = .number
const v7 = [13.37];
// v7 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v8 = {__proto__:v7,a:v7,constructor:Number,e:13.37,length:"number",b:13.37};
// v8 = .object(ofGroup: Object, withProperties: ["__proto__", "a", "b", "e", "length"], withMethods: ["constructor"])
const v9 = 13.37 && v8;
// v9 = .boolean
let v12 = "p8Xp0R1moN";
const v13 = JSON.stringify(v12);
// v13 = .string + .object(ofGroup: String, withProperties: ["constructor", "__proto__", "length"], withMethods: ["slice", "concat", "replace", "charCodeAt", "split", "trim", "startsWith", "includes", "indexOf", "charAt", "codePointAt", "repeat", "padStart", "lastIndexOf", "substring", "endsWith", "padEnd"])
v8[v13] = v2;
let v15 = v9;
const v16 = JSON.stringify(v15);
// v16 = .string + .object(ofGroup: String, withProperties: ["constructor", "__proto__", "length"], withMethods: ["slice", "concat", "replace", "charCodeAt", "split", "trim", "startsWith", "includes", "indexOf", "charAt", "codePointAt", "repeat", "padStart", "lastIndexOf", "substring", "endsWith", "padEnd"])
const v18 = JSON.parse(v16,2435262485);
// v18 = .unknown
}
%NeverOptimizeFunction(main);
main();
