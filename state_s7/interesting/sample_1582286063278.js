function main() {
const v4 = [1337];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v5 = {__proto__:RegExp,length:v4,b:"Lg4kb1eIOi",c:1337,valueOf:2552665081};
// v5 = .object(ofGroup: Object, withProperties: ["__proto__", "length", "b", "c", "valueOf"], withMethods: ["__proto__"])
let v6 = RegExp;
let v8 = RegExp;
let v10 = v8;
v6.c = 1;
const v14 = new Proxy(v10,Object);
// v14 = .unknown
const v15 = Object.freeze(v14);
// v15 = .undefined
}
%NeverOptimizeFunction(main);
main();
