function main() {
const v2 = [13.37,13.37,13.37,13.37,13.37];
// v2 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v3 = 4294967297 != v2;
// v3 = .boolean
let v6 = 13.37;
const v10 = {valueOf:3156875969,length:13.37,d:127,e:127};
// v10 = .object(ofGroup: Object, withProperties: ["__proto__", "d", "e", "length", "valueOf"])
let v11 = v10;
const v15 = [2153514987,13.37,13.37,v11,13.37];
// v15 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
delete v11.d;
const v17 = [v15,JSON,v15];
// v17 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v18 = {length:13.37,b:"NEGATIVE_INFINITY",valueOf:v15,__proto__:v17};
// v18 = .object(ofGroup: Object, withProperties: ["__proto__", "valueOf", "length", "b"])
const v19 = {a:1337,toString:"NEGATIVE_INFINITY",constructor:"NEGATIVE_INFINITY",valueOf:v18,b:13.37,c:JSON,e:JSON};
// v19 = .object(ofGroup: Object, withProperties: ["e", "__proto__", "constructor", "toString", "b", "c", "valueOf", "a"])
const v21 = JSON.stringify(v19,v6,"symbol");
// v21 = .string + .object(ofGroup: String, withProperties: ["__proto__", "constructor", "length"], withMethods: ["charCodeAt", "includes", "split", "substring", "concat", "repeat", "slice", "charAt", "trim", "codePointAt", "indexOf", "padEnd", "padStart", "endsWith", "replace", "startsWith", "lastIndexOf"])
}
%NeverOptimizeFunction(main);
main();
