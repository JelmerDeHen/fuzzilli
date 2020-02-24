function main() {
let v2 = 13.37;
const v7 = {valueOf:3156875969,length:13.37,d:127,e:127};
// v7 = .object(ofGroup: Object, withProperties: ["valueOf", "e", "length", "__proto__", "d"])
let v8 = v7;
v8.valueOf = NaN;
const v12 = [2153514987,13.37,13.37,v8,13.37];
// v12 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v14 = [v12,JSON,v12];
// v14 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v15 = {length:13.37,b:"NEGATIVE_INFINITY",valueOf:v12,__proto__:v14};
// v15 = .object(ofGroup: Object, withProperties: ["length", "b", "__proto__", "valueOf"])
const v16 = {a:1337,toString:"NEGATIVE_INFINITY",constructor:"NEGATIVE_INFINITY",valueOf:v15,b:13.37,c:JSON,e:JSON};
// v16 = .object(ofGroup: Object, withProperties: ["b", "e", "__proto__", "c", "a", "valueOf", "constructor", "toString"])
const v18 = JSON.stringify(v16,v2,"symbol");
// v18 = .string + .object(ofGroup: String, withProperties: ["constructor", "__proto__", "length"], withMethods: ["indexOf", "padEnd", "replace", "charAt", "trim", "endsWith", "padStart", "charCodeAt", "codePointAt", "split", "includes", "startsWith", "repeat", "lastIndexOf", "concat", "substring", "slice"])
}
%NeverOptimizeFunction(main);
main();
