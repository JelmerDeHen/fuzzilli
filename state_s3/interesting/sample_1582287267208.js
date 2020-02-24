function main() {
const v2 = "function".charCodeAt(554283132);
// v2 = .integer
let v5 = 0;
const v9 = [13.37];
// v9 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v10 = !v2;
// v10 = .boolean
JSON.b = v10;
let v12 = undefined;
const v14 = {};
// v14 = .object(ofGroup: Object, withProperties: ["__proto__"])
const v19 = [2153514987,13.37,13.37,13.37,v9];
// v19 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v21 = {length:13.37,b:"NEGATIVE_INFINITY",valueOf:v19,__proto__:v9};
// v21 = .object(ofGroup: Object, withProperties: ["length", "b", "valueOf", "__proto__"])
const v22 = {a:1337,toString:v14,constructor:"NEGATIVE_INFINITY",valueOf:v21,b:13.37,c:JSON,e:JSON};
// v22 = .object(ofGroup: Object, withProperties: ["b", "__proto__", "valueOf", "a", "c", "constructor", "e", "toString"])
const v24 = JSON.stringify(v22,Reflect,"name");
// v24 = .string + .object(ofGroup: String, withProperties: ["constructor", "__proto__", "length"], withMethods: ["indexOf", "padEnd", "replace", "charAt", "trim", "endsWith", "padStart", "charCodeAt", "codePointAt", "split", "includes", "startsWith", "repeat", "lastIndexOf", "concat", "substring", "slice"])
}
%NeverOptimizeFunction(main);
main();
