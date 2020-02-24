function main() {
const v2 = "function".charCodeAt(554283132);
// v2 = .integer
let v5 = 0;
const v9 = [13.37];
// v9 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v10 = !v2;
// v10 = .boolean
JSON.b = v10;
let v12 = undefined;
const v14 = {};
// v14 = .object(ofGroup: Object, withProperties: ["__proto__"])
const v19 = [2153514987,13.37,13.37,13.37,v9];
// v19 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v21 = {length:13.37,b:"NEGATIVE_INFINITY",valueOf:v19,__proto__:v9};
// v21 = .object(ofGroup: Object, withProperties: ["b", "length", "__proto__", "valueOf"])
const v22 = {a:1337,toString:v14,constructor:"NEGATIVE_INFINITY",valueOf:v21,b:13.37,c:JSON,e:JSON};
// v22 = .object(ofGroup: Object, withProperties: ["constructor", "c", "valueOf", "__proto__", "a", "toString", "b", "e"])
const v24 = JSON.stringify(v22,Reflect,"name");
// v24 = .string + .object(ofGroup: String, withProperties: ["length", "__proto__", "constructor"], withMethods: ["trim", "endsWith", "split", "charAt", "padStart", "codePointAt", "substring", "charCodeAt", "replace", "lastIndexOf", "includes", "repeat", "indexOf", "slice", "startsWith", "concat", "padEnd"])
}
%NeverOptimizeFunction(main);
main();
