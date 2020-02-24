function main() {
let v2 = 13.37;
const v7 = {valueOf:3156875969,length:13.37,d:127,e:127};
// v7 = .object(ofGroup: Object, withProperties: ["valueOf", "d", "length", "__proto__", "e"])
let v8 = v7;
v8.valueOf = NaN;
const v12 = [2153514987,13.37,13.37,v8,13.37];
// v12 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v14 = [v12,JSON,v12];
// v14 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v15 = {length:13.37,b:"NEGATIVE_INFINITY",valueOf:v12,__proto__:v14};
// v15 = .object(ofGroup: Object, withProperties: ["__proto__", "b", "length", "valueOf"])
const v16 = {a:1337,toString:"NEGATIVE_INFINITY",constructor:"NEGATIVE_INFINITY",valueOf:v15,b:13.37,c:JSON,e:JSON};
// v16 = .object(ofGroup: Object, withProperties: ["__proto__", "b", "e", "c", "constructor", "a", "toString", "valueOf"])
const v18 = JSON.stringify(v16,v2,"symbol");
// v18 = .string + .object(ofGroup: String, withProperties: ["__proto__", "constructor", "length"], withMethods: ["charCodeAt", "includes", "split", "substring", "concat", "repeat", "slice", "charAt", "trim", "codePointAt", "indexOf", "padEnd", "padStart", "endsWith", "replace", "startsWith", "lastIndexOf"])
}
%NeverOptimizeFunction(main);
main();
