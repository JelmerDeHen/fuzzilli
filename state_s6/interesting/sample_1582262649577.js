function main() {
let v2 = 13.37;
const v7 = {valueOf:3156875969,length:13.37,d:127,e:127};
// v7 = .object(ofGroup: Object, withProperties: ["__proto__", "d", "valueOf", "e", "length"])
let v8 = v7;
v8.valueOf = NaN;
const v12 = [2153514987,13.37,13.37,v8,13.37];
// v12 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v14 = [v12,JSON,v12];
// v14 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v15 = {length:13.37,b:"NEGATIVE_INFINITY",valueOf:v12,__proto__:v14};
// v15 = .object(ofGroup: Object, withProperties: ["b", "length", "valueOf", "__proto__"])
const v16 = {a:1337,toString:"NEGATIVE_INFINITY",constructor:"NEGATIVE_INFINITY",valueOf:v15,b:13.37,c:JSON,e:JSON};
// v16 = .object(ofGroup: Object, withProperties: ["constructor", "toString", "a", "e", "b", "valueOf", "c", "__proto__"])
const v18 = JSON.stringify(v16,v2,"symbol");
// v18 = .string + .object(ofGroup: String, withProperties: ["constructor", "__proto__", "length"], withMethods: ["slice", "concat", "replace", "charCodeAt", "split", "trim", "startsWith", "includes", "indexOf", "charAt", "codePointAt", "repeat", "padStart", "lastIndexOf", "substring", "endsWith", "padEnd"])
}
%NeverOptimizeFunction(main);
main();
