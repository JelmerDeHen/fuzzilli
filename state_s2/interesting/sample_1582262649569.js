function main() {
let v2 = 13.37;
const v7 = {valueOf:3156875969,length:13.37,d:127,e:127};
// v7 = .object(ofGroup: Object, withProperties: ["length", "valueOf", "__proto__", "e", "d"])
let v8 = v7;
v8.valueOf = NaN;
const v12 = [2153514987,13.37,13.37,v8,13.37];
// v12 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v14 = [v12,JSON,v12];
// v14 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v15 = {length:13.37,b:"NEGATIVE_INFINITY",valueOf:v12,__proto__:v14};
// v15 = .object(ofGroup: Object, withProperties: ["__proto__", "valueOf", "length", "b"])
const v16 = {a:1337,toString:"NEGATIVE_INFINITY",constructor:"NEGATIVE_INFINITY",valueOf:v15,b:13.37,c:JSON,e:JSON};
// v16 = .object(ofGroup: Object, withProperties: ["a", "__proto__", "c", "toString", "constructor", "b", "valueOf", "e"])
const v18 = JSON.stringify(v16,v2,"symbol");
// v18 = .string + .object(ofGroup: String, withProperties: ["constructor", "length", "__proto__"], withMethods: ["startsWith", "repeat", "codePointAt", "charCodeAt", "padStart", "padEnd", "concat", "substring", "lastIndexOf", "split", "indexOf", "includes", "slice", "endsWith", "charAt", "trim", "replace"])
}
%NeverOptimizeFunction(main);
main();
