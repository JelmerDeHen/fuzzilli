function main() {
const v2 = "function".charCodeAt(554283132);
// v2 = .integer
let v5 = 0;
const v9 = [13.37];
// v9 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v10 = !v2;
// v10 = .boolean
JSON.b = v10;
let v12 = undefined;
const v14 = {};
// v14 = .object(ofGroup: Object, withProperties: ["__proto__"])
const v19 = [2153514987,13.37,13.37,13.37,v9];
// v19 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v21 = {length:13.37,b:"NEGATIVE_INFINITY",valueOf:v19,__proto__:v9};
// v21 = .object(ofGroup: Object, withProperties: ["b", "__proto__", "length", "valueOf"])
const v22 = {a:1337,toString:v14,constructor:"NEGATIVE_INFINITY",valueOf:v21,b:13.37,c:JSON,e:JSON};
// v22 = .object(ofGroup: Object, withProperties: ["toString", "b", "a", "__proto__", "c", "valueOf", "e", "constructor"])
const v24 = JSON.stringify(v22,Reflect,"name");
// v24 = .string + .object(ofGroup: String, withProperties: ["length", "__proto__", "constructor"], withMethods: ["replace", "padStart", "charCodeAt", "repeat", "indexOf", "trim", "lastIndexOf", "padEnd", "concat", "split", "startsWith", "codePointAt", "endsWith", "charAt", "slice", "substring", "includes"])
}
%NeverOptimizeFunction(main);
main();
