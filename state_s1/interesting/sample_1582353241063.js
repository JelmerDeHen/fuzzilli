function main() {
const v5 = [1337];
// v5 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v6 = {__proto__:v5,a:v5,constructor:Number,e:13.37,length:"number",b:13.37};
// v6 = .object(ofGroup: Object, withProperties: ["e", "a", "__proto__", "length", "b"], withMethods: ["constructor"])
const v7 = 13.37 && v6;
// v7 = .boolean
let v10 = "p8Xp0R1moN";
const v11 = JSON.stringify(v10);
// v11 = .string + .object(ofGroup: String, withProperties: ["length", "constructor", "__proto__"], withMethods: ["endsWith", "split", "padEnd", "repeat", "lastIndexOf", "substring", "slice", "startsWith", "includes", "charCodeAt", "padStart", "concat", "trim", "replace", "indexOf", "charAt", "codePointAt"])
v6[v11] = 13.37;
let v13 = v7;
const v14 = JSON.stringify(v13);
// v14 = .string + .object(ofGroup: String, withProperties: ["length", "constructor", "__proto__"], withMethods: ["endsWith", "split", "padEnd", "repeat", "lastIndexOf", "substring", "slice", "startsWith", "includes", "charCodeAt", "padStart", "concat", "trim", "replace", "indexOf", "charAt", "codePointAt"])
const v16 = JSON.parse(v14,2435262485);
// v16 = .unknown
}
%NeverOptimizeFunction(main);
main();
