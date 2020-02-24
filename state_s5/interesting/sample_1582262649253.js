function main() {
let v2 = 13.37;
const v7 = {valueOf:3156875969,length:13.37,d:127,e:127};
// v7 = .object(ofGroup: Object, withProperties: ["d", "__proto__", "e", "valueOf", "length"])
let v8 = v7;
v8.valueOf = NaN;
const v12 = [2153514987,13.37,13.37,v8,13.37];
// v12 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v14 = [v12,JSON,v12];
// v14 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v15 = {length:13.37,b:"NEGATIVE_INFINITY",valueOf:v12,__proto__:v14};
// v15 = .object(ofGroup: Object, withProperties: ["valueOf", "b", "__proto__", "length"])
const v16 = {a:1337,toString:"NEGATIVE_INFINITY",constructor:"NEGATIVE_INFINITY",valueOf:v15,b:13.37,c:JSON,e:JSON};
// v16 = .object(ofGroup: Object, withProperties: ["c", "constructor", "a", "__proto__", "toString", "e", "b", "valueOf"])
const v18 = JSON.stringify(v16,v2,"symbol");
// v18 = .string + .object(ofGroup: String, withProperties: ["length", "__proto__", "constructor"], withMethods: ["replace", "padStart", "charCodeAt", "repeat", "indexOf", "trim", "lastIndexOf", "padEnd", "concat", "split", "startsWith", "codePointAt", "endsWith", "charAt", "slice", "substring", "includes"])
}
%NeverOptimizeFunction(main);
main();
