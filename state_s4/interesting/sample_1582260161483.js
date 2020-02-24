function main() {
const v4 = [2153514987,13.37,13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v6 = [v4,v4,v4];
// v6 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v7 = {length:13.37,b:"NEGATIVE_INFINITY",valueOf:v4,__proto__:v6};
// v7 = .object(ofGroup: Object, withProperties: ["b", "valueOf", "length", "__proto__"])
const v8 = {a:1337,toString:"NEGATIVE_INFINITY",constructor:"NEGATIVE_INFINITY",valueOf:v7,b:13.37,c:JSON,e:JSON};
// v8 = .object(ofGroup: Object, withProperties: ["b", "e", "__proto__", "a", "valueOf", "c", "constructor", "toString"])
const v11 = JSON.stringify(v8,Reflect,"symbol");
// v11 = .string + .object(ofGroup: String, withProperties: ["length", "constructor", "__proto__"], withMethods: ["padEnd", "substring", "charAt", "split", "includes", "padStart", "trim", "charCodeAt", "startsWith", "lastIndexOf", "replace", "repeat", "concat", "slice", "indexOf", "endsWith", "codePointAt"])
}
%NeverOptimizeFunction(main);
main();
