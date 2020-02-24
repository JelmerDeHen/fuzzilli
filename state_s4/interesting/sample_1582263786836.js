function main() {
const v1 = {};
// v1 = .object(ofGroup: Object, withProperties: ["__proto__"])
let v2 = v1;
const v7 = [2153514987,13.37,13.37,13.37,13.37];
// v7 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v9 = [v2,v7,v7];
// v9 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v10 = {length:13.37,b:"NEGATIVE_INFINITY",valueOf:v7,__proto__:v9};
// v10 = .object(ofGroup: Object, withProperties: ["length", "__proto__", "b", "valueOf"])
const v11 = {a:1337,toString:v1,constructor:"NEGATIVE_INFINITY",valueOf:v10,b:13.37,c:JSON,e:JSON};
// v11 = .object(ofGroup: Object, withProperties: ["toString", "valueOf", "constructor", "c", "e", "__proto__", "a", "b"])
v9.__proto__ = v1;
const v13 = JSON.stringify(v11,Reflect,"name");
// v13 = .string + .object(ofGroup: String, withProperties: ["length", "constructor", "__proto__"], withMethods: ["padEnd", "substring", "charAt", "split", "includes", "padStart", "trim", "charCodeAt", "startsWith", "lastIndexOf", "replace", "repeat", "concat", "slice", "indexOf", "endsWith", "codePointAt"])
}
%NeverOptimizeFunction(main);
main();
