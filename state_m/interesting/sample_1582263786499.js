function main() {
const v1 = {};
// v1 = .object(ofGroup: Object, withProperties: ["__proto__"])
let v2 = v1;
const v7 = [2153514987,13.37,13.37,13.37,13.37];
// v7 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v9 = [v2,v7,v7];
// v9 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v10 = {length:13.37,b:"NEGATIVE_INFINITY",valueOf:v7,__proto__:v9};
// v10 = .object(ofGroup: Object, withProperties: ["length", "__proto__", "valueOf", "b"])
const v11 = {a:1337,toString:v1,constructor:"NEGATIVE_INFINITY",valueOf:v10,b:13.37,c:JSON,e:JSON};
// v11 = .object(ofGroup: Object, withProperties: ["toString", "e", "constructor", "b", "a", "valueOf", "__proto__", "c"])
v9.__proto__ = v1;
const v13 = JSON.stringify(v11,Reflect,"name");
// v13 = .string + .object(ofGroup: String, withProperties: ["constructor", "length", "__proto__"], withMethods: ["includes", "indexOf", "startsWith", "codePointAt", "split", "slice", "concat", "trim", "substring", "charCodeAt", "endsWith", "replace", "padStart", "repeat", "padEnd", "charAt", "lastIndexOf"])
}
%NeverOptimizeFunction(main);
main();
