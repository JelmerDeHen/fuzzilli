function main() {
let v4 = 0;
let v7 = 0;
let v8 = 13.37;
const v13 = {valueOf:3156875969,length:13.37,d:127,e:127};
// v13 = .object(ofGroup: Object, withProperties: ["e", "valueOf", "__proto__", "d", "length"])
let v14 = v13;
v14.valueOf = Array;
const v18 = [2153514987,13.37,13.37,v14,13.37];
// v18 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v20 = [v18,JSON,v18];
// v20 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v21 = {length:13.37,b:"NEGATIVE_INFINITY",valueOf:v18,__proto__:v20};
// v21 = .object(ofGroup: Object, withProperties: ["valueOf", "b", "__proto__", "length"])
const v22 = {a:1337,toString:"NEGATIVE_INFINITY",constructor:"NEGATIVE_INFINITY",valueOf:v21,b:13.37,c:JSON,e:JSON};
// v22 = .object(ofGroup: Object, withProperties: ["toString", "c", "e", "constructor", "a", "__proto__", "b", "valueOf"])
const v24 = JSON.stringify(v22,v8,"symbol");
// v24 = .string + .object(ofGroup: String, withProperties: ["length", "constructor", "__proto__"], withMethods: ["padEnd", "substring", "charAt", "split", "includes", "padStart", "trim", "charCodeAt", "startsWith", "lastIndexOf", "replace", "repeat", "concat", "slice", "indexOf", "endsWith", "codePointAt"])
}
%NeverOptimizeFunction(main);
main();
