function main() {
const v1 = {};
// v1 = .object(ofGroup: Object, withProperties: ["__proto__"])
let v2 = v1;
const v7 = [2153514987,13.37,13.37,13.37,13.37];
// v7 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v9 = [v2,v7,v7];
// v9 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v10 = {length:13.37,b:"NEGATIVE_INFINITY",valueOf:v7,__proto__:v9};
// v10 = .object(ofGroup: Object, withProperties: ["length", "b", "__proto__", "valueOf"])
const v11 = {a:1337,toString:v1,constructor:"NEGATIVE_INFINITY",valueOf:v10,b:13.37,c:JSON,e:JSON};
// v11 = .object(ofGroup: Object, withProperties: ["valueOf", "constructor", "a", "e", "__proto__", "c", "b", "toString"])
v9.__proto__ = v1;
const v13 = JSON.stringify(v11,Reflect,"name");
// v13 = .string + .object(ofGroup: String, withProperties: ["length", "constructor", "__proto__"], withMethods: ["endsWith", "split", "padEnd", "repeat", "lastIndexOf", "substring", "slice", "startsWith", "includes", "charCodeAt", "padStart", "concat", "trim", "replace", "indexOf", "charAt", "codePointAt"])
}
%NeverOptimizeFunction(main);
main();
