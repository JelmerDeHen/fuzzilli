function main() {
const v2 = "function".charCodeAt(554283132);
// v2 = .integer
let v5 = 0;
const v9 = [13.37];
// v9 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v10 = !v2;
// v10 = .boolean
JSON.b = v10;
let v12 = undefined;
const v14 = {};
// v14 = .object(ofGroup: Object, withProperties: ["__proto__"])
const v19 = [2153514987,13.37,13.37,13.37,v9];
// v19 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v21 = {length:13.37,b:"NEGATIVE_INFINITY",valueOf:v19,__proto__:v9};
// v21 = .object(ofGroup: Object, withProperties: ["b", "length", "valueOf", "__proto__"])
const v22 = {a:1337,toString:v14,constructor:"NEGATIVE_INFINITY",valueOf:v21,b:13.37,c:JSON,e:JSON};
// v22 = .object(ofGroup: Object, withProperties: ["b", "valueOf", "toString", "__proto__", "c", "a", "e", "constructor"])
const v24 = JSON.stringify(v22,Reflect,"name");
// v24 = .string + .object(ofGroup: String, withProperties: ["constructor", "__proto__", "length"], withMethods: ["slice", "concat", "replace", "charCodeAt", "split", "trim", "startsWith", "includes", "indexOf", "charAt", "codePointAt", "repeat", "padStart", "lastIndexOf", "substring", "endsWith", "padEnd"])
}
%NeverOptimizeFunction(main);
main();
