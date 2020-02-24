function main() {
let v4 = 0;
let v7 = 0;
let v8 = 13.37;
const v13 = {valueOf:3156875969,length:13.37,d:127,e:127};
// v13 = .object(ofGroup: Object, withProperties: ["valueOf", "e", "__proto__", "length", "d"])
let v14 = v13;
v14.valueOf = Array;
const v18 = [2153514987,13.37,13.37,v14,13.37];
// v18 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v20 = [v18,JSON,v18];
// v20 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v21 = {length:13.37,b:"NEGATIVE_INFINITY",valueOf:v18,__proto__:v20};
// v21 = .object(ofGroup: Object, withProperties: ["valueOf", "length", "__proto__", "b"])
const v22 = {a:1337,toString:"NEGATIVE_INFINITY",constructor:"NEGATIVE_INFINITY",valueOf:v21,b:13.37,c:JSON,e:JSON};
// v22 = .object(ofGroup: Object, withProperties: ["toString", "e", "constructor", "b", "a", "valueOf", "__proto__", "c"])
const v24 = JSON.stringify(v22,v8,"symbol");
// v24 = .string + .object(ofGroup: String, withProperties: ["constructor", "length", "__proto__"], withMethods: ["includes", "indexOf", "startsWith", "codePointAt", "split", "slice", "concat", "trim", "substring", "charCodeAt", "endsWith", "replace", "padStart", "repeat", "padEnd", "charAt", "lastIndexOf"])
}
%NeverOptimizeFunction(main);
main();
