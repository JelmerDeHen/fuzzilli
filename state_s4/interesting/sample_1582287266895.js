function main() {
const v2 = "function".charCodeAt(554283132);
// v2 = .integer
let v5 = 0;
const v9 = [13.37];
// v9 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v10 = !v2;
// v10 = .boolean
JSON.b = v10;
let v12 = undefined;
const v14 = {};
// v14 = .object(ofGroup: Object, withProperties: ["__proto__"])
const v19 = [2153514987,13.37,13.37,13.37,v9];
// v19 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v21 = {length:13.37,b:"NEGATIVE_INFINITY",valueOf:v19,__proto__:v9};
// v21 = .object(ofGroup: Object, withProperties: ["__proto__", "valueOf", "b", "length"])
const v22 = {a:1337,toString:v14,constructor:"NEGATIVE_INFINITY",valueOf:v21,b:13.37,c:JSON,e:JSON};
// v22 = .object(ofGroup: Object, withProperties: ["toString", "__proto__", "constructor", "valueOf", "e", "a", "b", "c"])
const v24 = JSON.stringify(v22,Reflect,"name");
// v24 = .string + .object(ofGroup: String, withProperties: ["length", "constructor", "__proto__"], withMethods: ["padEnd", "substring", "charAt", "split", "includes", "padStart", "trim", "charCodeAt", "startsWith", "lastIndexOf", "replace", "repeat", "concat", "slice", "indexOf", "endsWith", "codePointAt"])
}
%NeverOptimizeFunction(main);
main();
