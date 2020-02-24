function main() {
const v4 = [2153514987,13.37,13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v6 = [v4,v4,v4];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v7 = {length:13.37,b:"NEGATIVE_INFINITY",valueOf:v4,__proto__:v6};
// v7 = .object(ofGroup: Object, withProperties: ["valueOf", "b", "length", "__proto__"])
const v8 = {a:1337,toString:"NEGATIVE_INFINITY",constructor:"NEGATIVE_INFINITY",valueOf:v7,b:13.37,c:JSON,e:JSON};
// v8 = .object(ofGroup: Object, withProperties: ["e", "constructor", "__proto__", "b", "c", "toString", "a", "valueOf"])
const v11 = JSON.stringify(v8,Reflect,"symbol");
// v11 = .string + .object(ofGroup: String, withProperties: ["constructor", "__proto__", "length"], withMethods: ["slice", "concat", "replace", "charCodeAt", "split", "trim", "startsWith", "includes", "indexOf", "charAt", "codePointAt", "repeat", "padStart", "lastIndexOf", "substring", "endsWith", "padEnd"])
}
%NeverOptimizeFunction(main);
main();
